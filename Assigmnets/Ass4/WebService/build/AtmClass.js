"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Atm = /** @class */ (function () {
    // The constructor for the ATM class only specifies a signature without any code
    function Atm() {
    }
    Atm.prototype.setInitialBalance = function (acct, balance) {
        /*
        got.get('http://localhost:3000/${acct}/amount/${balance}').then(result){
            let data = JSON.parse(result);
        };*/
        this.accountNumber = acct;
        this.initialBalance = balance;
        this.currentBalance = balance;
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
        console.log("--------------------------");
        console.log(" Acct No." + this.accountNumber);
        console.log(" Initial Balance  BZD " + this.initialBalance);
        console.log(" Current Balance  BZD " + this.currentBalance);
    };
    Atm.prototype.closeOperation = function () {
        this.initialBalance = this.currentBalance;
    };
    return Atm;
}());
exports.Atm = Atm;
