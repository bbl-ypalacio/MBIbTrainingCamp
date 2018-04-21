"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var port = 3000;
App_1["default"].listen(port, function (err) {
    if (err) {
        return console.log("server is listen on port 3000");
    }
});
