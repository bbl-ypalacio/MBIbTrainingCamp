"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var got = require("got");
var Atm = /** @class */ (function () {
    // The constructor for the ATM class only specifies a signature without any code
    function Atm() {
    }
    Atm.prototype.setInitialBalance = function (acct, balance) {
        var _this = this;
        this.accountNumber = acct;
        this.initialBalance = balance;
        this.currentBalance = balance;
        if (acct == this.accountNumber) {
            got.get("http://localhost:3001/atm/setInitialBalance/" + acct + "/balance/" + balance).then(function (result) {
                var data = JSON.parse(result.body);
                console.log("\n>>>>setInitialBalance<<<<<<<<");
                console.log("Account Number :" + data.account);
                console.log("Initial Balance:" + data.amount);
                console.log("Current Balance:" + _this.currentBalance);
            });
        }
        else {
            console.log('**Error, wrong account number*');
        }
    };
    Atm.prototype.withdrawMoney = function (acct, amount) {
        var _this = this;
        if (acct == this.accountNumber) {
            got.get("http://localhost:3001/atm/withdraw/" + acct + "/amount/" + amount).then(function (result) {
                var data = JSON.parse(result.body);
                _this.currentBalance = _this.currentBalance - amount;
                console.log("\n>>>>withdrawMoney<<<<<<<<");
                console.log(" Account Number :" + data.account);
                console.log(" Withdrew  BZD  :" + data.amount);
                console.log(" Avaliable BZD  :" + _this.currentBalance);
            });
        }
        else {
            console.log('**Error, wrong account number*');
        }
    };
    Atm.prototype.depositMoney = function (acct, amount) {
        var _this = this;
        if (acct == this.accountNumber) {
            got.get("http://localhost:3001/atm/deposit/" + acct + "/amount/" + amount).then(function (result) {
                var data = JSON.parse(result.body);
                _this.currentBalance = _this.currentBalance + amount;
                console.log("\n>>>>depositMoney<<<<<<<<");
                console.log("Account Number   :" + data.account);
                console.log("Amount deposited :" + data.amount);
                console.log("Avaliable balance:" + _this.currentBalance);
            });
        }
        else {
            console.log("**Error, wrong account number*");
        }
    };
    Atm.prototype.showBalance = function (acct) {
        var _this = this;
        got.get("http://localhost:3001/atm/" + acct).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("\n>>>>showBalance<<<<<<<<");
            console.log("Account Number  :" + data.account);
            console.log("Current Balance :" + _this.currentBalance);
        });
    };
    Atm.prototype.closeOperation = function () {
        this.initialBalance = this.currentBalance;
    };
    return Atm;
}());
exports.Atm = Atm;
