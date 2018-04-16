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
        console.log("-----------you made it here(setInitialBalance) ---------------");
    };
    Atm.prototype.withdrawMoney = function (acct, amount) {
        if (acct == this.accountNumber) {
            console.log(">>>> withdrawing money <<<<<<<<");
            this.currentBalance = this.currentBalance - amount;
        }
        else {
            console.log('**Error, wrong account number*');
        }
    };
    Atm.prototype.depositMoney = function (acct, amount) {
        if (acct == this.accountNumber) {
            this.currentBalance = this.currentBalance + amount;
        }
        else {
            console.log("**Error, wrong account number*");
        }
    };
    Atm.prototype.showBalance = function (acct) {
        var _this = this;
        got.get("http://localhost:3001/atm/" + acct).then(function (result) {
            var data = JSON.parse(result.body);
            console.log("--------------------------");
            console.log(" Acct No." + _this.accountNumber);
            //console.log(" Initial Balance  BZD " + this.initialBalance);
            console.log(" Current Balance  BZD " + data.balance);
        });
    };
    Atm.prototype.closeOperation = function () {
        this.initialBalance = this.currentBalance;
    };
    return Atm;
}());
exports.Atm = Atm;
