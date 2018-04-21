"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.constructure = function () {
        this.express = express();
        this.mountTheRoutes();
    };
    App.prototype.mountTheRoutes = function () {
        var mickey = express.Router();
        var pluto = express.Router();
        mickey.get("/", function (req, resp) {
            var x = { status: 0, message: "OK" };
            resp.json(x);
        });
        pluto.get('/api/:accountID', function (req, resp) {
            resp.json({
                account: req.params.accountID,
                balance: 289.23
            });
        });
        this.express.use('/', mickey);
        this.express.use('/', pluto);
    };
    return App;
}());
exports["default"] = new App().express;
