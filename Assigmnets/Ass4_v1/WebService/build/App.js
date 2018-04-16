"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = /** @class */ (function () {
    //public accFunds = 200;
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        var routerSetInitialBalance = express.Router();
        var routerWithdrawMoney = express.Router();
        var routerDepositMoney = express.Router();
        var routerShowBalance = express.Router();
        //ensuring we have connectivity to webservice
        router.get('/atm', function (req, res) {
            res.json({
                status: 0,
                message: "ok"
            });
        });
        //routerSetInitialBalance
        router.get('/atm/setInitialBalance/:acct/balance/:bal', function (req, res) {
            console.log("routerSetInitialBalance is being called by: " + req.params.acct);
            res.json({
                account: req.params.acct,
                amount: req.params.bal
            });
        });
        //routerWithdrawMoney
        router.get('/atm/withdraw/:account/amount/:amount', function (req, res) {
            console.log("routerWithdrawMoney is being called by: " + req.params.account);
            res.json({
                account: req.params.account,
                amount: req.params.amount
            });
        });
        //routerDepositMoney
        router.get('/atm/deposit/:account/amount/:amount', function (req, res) {
            console.log("routerDepositMoney is being called by: " + req.params.account);
            res.json({
                account: req.params.account,
                amount: req.params.amount
            });
        });
        //routerShowBalance
        router.get('/atm/:account', function (req, res) {
            console.log("routerShowBalance is being called by: " + req.params.account);
            res.json({
                account: req.params.account
            });
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
