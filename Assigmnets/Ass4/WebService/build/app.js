"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var got = __importStar(require("got"));
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            got.get("<-Ending->").then(function (resp) {
                res.json({
                    resp: resp.body
                });
            });
            router.get('/hello', function (req, res) {
                res.json({
                    resp: "Yserri was here"
                });
            });
        });
        this.express.use('/', router);
    };
    return App;
}());
exports.default = new App().express;
