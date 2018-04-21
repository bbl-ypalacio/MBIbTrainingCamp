"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var _this = this;
        this.accountNumber = "009"; //should be replace(only here to make code work)
        var router = express.Router();
        var routerIsAliveConnection = express.Router();
        var routerSetInitialBalance = express.Router();
        var routerWithdrawMoney = express.Router();
        var routerDepositMoney = express.Router();
        var routerShowBalance = express.Router();
        //routerIsAliveConnection
        router.get('/atm', function (req, res) {
            console.log("isAliveConnection is being called");
            res.json({
                status: 0,
                message: "Ok"
            });
        });
        //routerSetInitialBalance
        router.get('/atm/setInitialBalance/:acct/balance/:bal', function (req, res) {
            console.log("routerSetInitialBalance is being called by: " + req.params.acct);
            if (req.params.acct == _this.accountNumber) {
                _this.accountNumber = req.params.acct;
                _this.initialBalance = req.params.bal;
                _this.currentBalance = req.params.bal;
                res.json({
                    account: _this.accountNumber,
                    amount: _this.initialBalance
                });
            }
            else {
                console.log('**Error, wrong account number*');
            }
        });
        //routerWithdrawMoney
        router.get('/atm/withdraw/:account/amount/:amount', function (req, res) {
            console.log("routerWithdrawMoney is being called by: " + req.params.account);
            if (req.params.account == _this.accountNumber) {
                _this.accTxnAmt = req.params.amount;
                _this.currentBalance = _this.currentBalance - _this.accTxnAmt;
                res.json({
                    account: _this.accountNumber,
                    amount: _this.accTxnAmt,
                    newBal: _this.currentBalance
                });
            }
            else {
                console.log('**Error, wrong account number*');
            }
        });
        //routerDepositMoney
        router.get('/atm/deposit/:account/amount/:amount', function (req, res) {
            console.log("routerDepositMoney is being called by: " + req.params.account);
            if (req.params.account == _this.accountNumber) {
                _this.accTxnAmt = req.params.amount;
                _this.currentBalance = _this.currentBalance + _this.accTxnAmt;
                res.json({
                    account: req.params.account,
                    amount: req.params.amount,
                    newBal: _this.currentBalance
                });
            }
            else {
                console.log("**Error, wrong account number*");
            }
        });
        //routerShowBalance
        router.get('/atm/:account', function (req, res) {
            console.log("routerShowBalance is being called by: " + req.params.account);
            if (req.params.account == _this.accountNumber) {
                res.json({
                    account: req.params.account,
                    newBal: _this.currentBalance
                });
            }
            else {
                console.log("**Error, wrong account number*");
            }
        });
        this.express.use('/', router);
        this.express.use('/', routerSetInitialBalance);
        this.express.use('/', routerWithdrawMoney);
        this.express.use('/', routerDepositMoney);
        this.express.use('/', routerShowBalance);
    };
    return App;
}());
exports.default = new App().express;
