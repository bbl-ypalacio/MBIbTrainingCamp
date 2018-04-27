"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var _ = require("lodash");
var cors = require("cors");
var atm_data_1 = require("./AtmDB/atm.data");
var atm_model_1 = require("./AtmDB/atm.model");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.express.use(cors());
        this.mountRoutes();
        /*
         *  Initialize the local DB
        */
        this.localDB = new atm_model_1.accountList();
        this.localDB.accounts = atm_data_1.InitialData;
        this.transactionList = new atm_model_1.TransactionList();
    }
    App.prototype.mountRoutes = function () {
        var _this = this;
        //const router                    = express.Router();
        var routerIsAliveConnection = express.Router();
        var routerAccountExists = express.Router();
        var routerSetInitialBalance = express.Router();
        var routerWithdrawMoney = express.Router();
        var routerDepositMoney = express.Router();
        var routerShowBalance = express.Router();
        var routerGetLastOperations = express.Router();
        //routerIsAliveConnection
        routerIsAliveConnection.get('/atm/isAliveConnection', function (req, res) {
            console.log("isAliveConnection is being called");
            //res.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                status: 0,
                message: "Ok"
            });
        });
        //routerAccountExists
        routerAccountExists.get('/atm/AccountExists/:acct', function (req, res) {
            //console.log("routerAccountExists is being called by: " + req.params.acct);
            var accExist = _this.accountExists(req.params.acct);
            //res.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                status: accExist
            });
        });
        //routerSetInitialBalance//TODO:modify to alter array
        routerSetInitialBalance.get('/atm/setInitialBalance/:acct/balance/:bal', function (req, res) {
            //console.log("routerSetInitialBalance is being called by: " + req.params.acct);		
            if (_this.accountExists(req.params.acct)) {
                var acc = req.params.acct;
                var amt = req.params.bal;
                var result = _.findIndex(_this.localDB.accounts, { 'accountNumber': acc });
                _this.localDB.accounts[result].currentBalance = amt;
                //record the transaction in the transaction list
                var newTransaction = new atm_model_1.TransactionModel();
                newTransaction.accountNumber = acc;
                newTransaction.amount = amt;
                newTransaction.transactionType = "SetBalance";
                _this.transactionList.transactions.push(newTransaction);
                //res.setHeader('Access-Control-Allow-Origin', '*');
                res.json({
                    account: _this.localDB.accounts[result].accountNumber,
                    newBal: _this.localDB.accounts[result].currentBalance
                });
            }
            else {
                console.log('**Error, wrong account number*');
            }
        });
        //routerWithdrawMoney
        routerWithdrawMoney.get('/atm/withdraw/:account/amount/:amount', function (req, res) {
            console.log("routerWithdrawMoney is being called by: " + req.params.account);
            if (_this.accountExists(req.params.account)) {
                var acc = req.params.account;
                var amt = req.params.amount;
                var result = _.findIndex(_this.localDB.accounts, { 'accountNumber': acc });
                _this.localDB.accounts[result].currentBalance -= amt;
                //record the transaction in the transaction list
                var newTransaction = new atm_model_1.TransactionModel();
                newTransaction.accountNumber = acc;
                newTransaction.amount = amt;
                newTransaction.transactionType = "WithDraw";
                _this.transactionList.transactions.push(newTransaction);
                //res.setHeader('Access-Control-Allow-Origin', '*');
                res.json({
                    account: _this.localDB.accounts[result].accountNumber,
                    newBal: _this.localDB.accounts[result].currentBalance
                });
            }
            else {
                console.log('**Error, wrong account number*');
            }
        });
        //routerDepositMoney
        routerDepositMoney.get('/atm/deposit/:account/amount/:amount', function (req, res) {
            console.log("routerDepositMoney is being called by: " + req.params.account);
            if (_this.accountExists(req.params.account)) {
                var acc = req.params.account;
                var amt = req.params.amount;
                var result = _.findIndex(_this.localDB.accounts, { 'accountNumber': acc });
                _this.localDB.accounts[result].currentBalance = Number(_this.localDB.accounts[result].currentBalance) + Number(amt);
                //record the transaction in the transaction list
                var newTransaction = new atm_model_1.TransactionModel();
                newTransaction.accountNumber = acc;
                newTransaction.amount = amt;
                newTransaction.transactionType = "Deposit";
                _this.transactionList.transactions.push(newTransaction);
                //res.setHeader('Access-Control-Allow-Origin', '*');
                res.json({
                    account: _this.localDB.accounts[result].accountNumber,
                    newBal: _this.localDB.accounts[result].currentBalance
                });
            }
            else {
                console.log("**Error, wrong account number*");
            }
        });
        //routerShowBalance
        routerShowBalance.get('/atm/ShowBalance/:account', function (req, res) {
            console.log("routerShowBalance is being called by: " + req.params.account);
            if (_this.accountExists(req.params.account)) {
                var result = _.findIndex(_this.localDB.accounts, { 'accountNumber': req.params.account });
                //res.setHeader('Access-Control-Allow-Origin', '*');
                res.json({
                    account: req.params.account,
                    newBal: _this.localDB.accounts[result].currentBalance
                });
            }
            else {
                console.log("**Error, wrong account number*");
            }
        });
        //routerGetLastOperations
        routerGetLastOperations.get('/atm/GetLastOperations/:account', function (req, res) {
            console.log("routerGetLastOperations is being called by: " + req.params.account);
            if (_this.accountExists(req.params.account)) {
                var result = new atm_model_1.TransactionList();
                result.transactions = _.filter(_this.transactionList.transactions, {
                    'accountNumber': req.params.account
                });
                //res.setHeader('Access-Control-Allow-Origin', '*');
                res.json({
                    lastOperations: result
                });
            }
            else {
                console.log("**Error, wrong account number*");
            }
        });
        this.express.use('/', routerIsAliveConnection);
        this.express.use('/', routerAccountExists);
        this.express.use('/', routerSetInitialBalance);
        this.express.use('/', routerWithdrawMoney);
        this.express.use('/', routerDepositMoney);
        this.express.use('/', routerShowBalance);
        this.express.use('/', routerGetLastOperations);
    };
    App.prototype.accountExists = function (acct) {
        return _.some(this.localDB.accounts, { 'accountNumber': acct });
    };
    return App;
}());
exports.default = new App().express;
