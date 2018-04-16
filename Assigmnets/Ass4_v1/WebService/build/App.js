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
        //const routerSetInitialBalance   = express.Router();
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
        //routerWithdrawMoney
        router.get('/atm/withdraw/:account/amount/:amount', function (req, res) {
            console.log("routerWithdrawMoney is being called by: " + req.params.account);
            //this.accFunds = this.accFunds - (req.params.amount); 
            res.json({
                acctNum: req.params.account
            });
        });
        //routerDepositMoney
        router.get('/atm/deposit/:account/amount/:amount', function (req, res) {
            console.log("routerDepositMoney is being called by: " + req.params.account);
            //this.accFunds = this.accFunds + amt;
            res.json({
                account: req.params.account,
                amount: req.params.amount
            });
        });
        /*
        router.get('/atm', (req, res) => {
            res.json({
                status: 0,
                message: "ok"
            })
        }); */
        //routerShowBalance
        router.get('/atm/:citNum', function (req, res) {
            console.log("routerShowBalance is being called by: " + req.params.citNum);
            res.json({
                acctNum: req.params.citNum
            });
        });
        this.express.use('/', router);
        //this.express.use('/', routerSetInitialBalance)
        this.express.use('/', routerWithdrawMoney);
        this.express.use('/', routerDepositMoney);
        this.express.use('/', routerShowBalance);
    };
    return App;
}());
exports.default = new App().express;
