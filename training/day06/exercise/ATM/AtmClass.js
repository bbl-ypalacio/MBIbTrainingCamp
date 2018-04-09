"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Atm = /** @class */ (function () {
    //the constructur for the ATM class onlu secifies a signatuer without any code
    function Atm() {
    }
    Atm.prototype.setInitialBalance = function (acct, balance) {
        this.accountNumber = acct;
        this.initilalBalance = balance;
        this.currentBalance = balance;
    };
    Atm.prototype.withdrawMoney = function (acct, amount) {
        if (acct == this.accountNumber) {
            console.log('**>>>>>>>>>>>Withdawing money>>>>>>>>');
            this.currentBalance = this.currentBalance - amount;
        }
        else {
            console.log('**Erro, wrong account number');
        }
    };
    Atm.prototype.depositMoney = function (acct, amount) {
        if (acct == this.accountNumber) {
            this.currentBalance = this.currentBalance + amount;
        }
        else {
            console.log('**Erro, wrong account number');
        }
    };
    Atm.prototype.showBalance = function (acct) {
        console.log('--------------------------');
        console.log('**Erro, wrong account number');
        console.log('**Erro, wrong account number');
        console.log('**Erro, wrong account number');
    };
    Atm.prototype.closeOperation = function () {
    };
    return Atm;
}());
exports.Atm = Atm;
//# sourceMappingURL=AtmClass.js.map