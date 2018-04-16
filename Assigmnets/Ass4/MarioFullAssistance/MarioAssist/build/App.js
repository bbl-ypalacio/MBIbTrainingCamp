"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var showBalanceRouter = express.Router();
        var router = express.Router();
        router.get('/atm', function (req, res) {
            res.json({
                status: 0,
                message: "ok"
            });
        });
        router.get('/atm/:citNum', function (req, res) {
            console.log("I am being called");
            console.log(" Acct number " + req.params.citNum);
            res.json({
                acctNum: req.params.citNum,
                balance: 100
            });
        });
        this.express.use('/', router);
        this.express.use('/', showBalanceRouter);
    };
    return App;
}());
exports.default = new App().express;
