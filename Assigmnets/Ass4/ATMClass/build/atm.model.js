"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accountModel = /** @class */ (function () {
    function accountModel() {
        this.accountNumber = '';
        this.currentBalance = 0;
    }
    return accountModel;
}());
exports.accountModel = accountModel;
var accountList = /** @class */ (function () {
    function accountList() {
        this.accounts = [];
    }
    return accountList;
}());
exports.accountList = accountList;
var TransactionModel = /** @class */ (function () {
    function TransactionModel() {
        this.accountNumber = '';
        this.dateOfTransaction = new Date();
        this.transactionType = '';
        this.amount = 0;
    }
    return TransactionModel;
}());
exports.TransactionModel = TransactionModel;
var TransactionList = /** @class */ (function () {
    function TransactionList() {
        this.transactions = [];
    }
    return TransactionList;
}());
exports.TransactionList = TransactionList;
