"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var got = require("got");
var Atm = /** @class */ (function () {
    // The constructor for the ATM class only specifies a signature without any code
    function Atm() {
    }
    //TODO:
    //isAliveConnection()
    //use loadash for db
    //Put logic in webervice
    Atm.prototype.isAliveConnection = function () {
        got.get("http://localhost:3000/atm/isAliveConnection").then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>isAliveConnection<<<<<<<<");
            console.log("Status  is :" + data.status);
            console.log("Message is :" + data.message);
        });
    };
    Atm.prototype.setInitialBalance = function (acct, balance) {
        got.get("http://localhost:3000/atm/setInitialBalance/" + acct + "/balance/" + balance).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>setInitialBalance<<<<<<<<");
            console.log("Account Number :" + data.account);
            console.log("Initial Balance:" + data.newBal);
        });
    };
    Atm.prototype.withdrawMoney = function (acct, amount) {
        got.get("http://localhost:3000/atm/withdraw/" + acct + "/amount/" + amount).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>withdrawMoney<<<<<<<<");
            console.log(" Account Number :" + data.account);
            console.log(" Avaliable BZD  :" + data.newBal);
        });
    };
    Atm.prototype.depositMoney = function (acct, amount) {
        got.get("http://localhost:3000/atm/deposit/" + acct + "/amount/" + amount).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>depositMoney<<<<<<<<");
            console.log("Account Number   :" + data.account);
            console.log("Avaliable balance:" + data.newBal);
        });
    };
    Atm.prototype.showBalance = function (acct) {
        got.get("http://localhost:3000/atm/ShowBalance/" + acct).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>showBalance<<<<<<<<");
            console.log("Account Number  :" + data.account);
            console.log("Current Balance :" + data.newBal);
        });
    };
    Atm.prototype.accountExists = function (acct) {
        got.get("http://localhost:3000/atm/AccountExists/" + acct).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>accountExists<<<<<<<<");
            console.log("accountExists?  :" + data.status);
        });
    };
    Atm.prototype.getLastOperations = function (acct) {
        got.get("http://localhost:3000/atm/GetLastOperations/" + acct).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>getLastOperations<<<<<<<<");
            console.log("LastOperations  :" + data.lastOperations);
        });
    };
    Atm.prototype.closeOperation = function () {
        console.log("\n>>>>closeOperation<<<<<<<<");
        this.initialBalance = this.currentBalance;
    };
    return Atm;
}());
exports.Atm = Atm;
