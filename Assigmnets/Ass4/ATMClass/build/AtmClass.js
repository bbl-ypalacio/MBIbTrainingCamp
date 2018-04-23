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
        got.get("http://localhost:3001/atm").then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>isAliveConnection<<<<<<<<");
            console.log("Status  is :" + data.status);
            console.log("Message is :" + data.message);
        });
    };
    Atm.prototype.setInitialBalance = function (acct, balance) {
        got.get("http://localhost:3001/atm/setInitialBalance/" + acct + "/balance/" + balance).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>setInitialBalance<<<<<<<<");
            console.log("Account Number :" + data.account);
            console.log("Initial Balance:" + data.amount);
            console.log("Current Balance:" + data.amount);
        });
    };
    Atm.prototype.withdrawMoney = function (acct, amount) {
        got.get("http://localhost:3001/atm/withdraw/" + acct + "/amount/" + amount).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>withdrawMoney<<<<<<<<");
            console.log(" Account Number :" + data.account);
            console.log(" Withdrew  BZD  :" + data.amount);
            console.log(" Avaliable BZD  :" + data.newBal);
        });
    };
    Atm.prototype.depositMoney = function (acct, amount) {
        got.get("http://localhost:3001/atm/deposit/" + acct + "/amount/" + amount).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>depositMoney<<<<<<<<");
            console.log("Account Number   :" + data.account);
            console.log("Amount deposited :" + data.amount);
            console.log("Avaliable balance:" + data.newBal);
        });
    };
    Atm.prototype.showBalance = function (acct) {
        got.get("http://localhost:3001/atm/" + acct).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>showBalance<<<<<<<<");
            console.log("Account Number  :" + data.account);
            console.log("Current Balance :" + data.newBal);
        });
    };
    Atm.prototype.closeOperation = function () {
        this.initialBalance = this.currentBalance;
    };
    return Atm;
}());
exports.Atm = Atm;
