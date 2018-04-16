"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var got = require("got");
var Atm = /** @class */ (function () {
    // The constructor for the ATM class only specifies a signature without any code
    function Atm() {
    }
    Atm.prototype.setInitialBalance = function (acct, balance) {
        this.accountNumber = acct;
        this.initialBalance = balance;
        this.currentBalance = balance;
        console.log(">>>>setInitialBalance<<<<<<<<");
        console.log("Account Number :" + this.accountNumber);
        console.log("Initial Balance:" + this.initialBalance);
        console.log("Current Balance:" + this.currentBalance);
    };
    Atm.prototype.withdrawMoney = function (acct, amount) {
        var _this = this;
        if (acct == this.accountNumber) {
            got.get("http://localhost:3001/atm/withdraw/" + acct + "/amount/" + amount).then(function (result) {
                var data = JSON.parse(result.body);
                _this.currentBalance = _this.currentBalance - amount;
                console.log(">>>>withdrawMoney<<<<<<<<");
                console.log(" Account Number :" + acct);
                console.log(" Withdrew  BZD  :" + amount);
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
                console.log(">>>>depositMoney<<<<<<<<");
                console.log("Amount deposited :" + amount);
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
            console.log(">>>>showBalance<<<<<<<<");
            console.log("Account Number  :" + _this.accountNumber);
            console.log("Current Balance :" + _this.currentBalance);
        });
    };
    Atm.prototype.closeOperation = function () {
        this.initialBalance = this.currentBalance;
    };
    return Atm;
}());
exports.Atm = Atm;
