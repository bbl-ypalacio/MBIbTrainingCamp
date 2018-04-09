import { AtmInterface } from './AtmInterface';

export class Atm implements AtmInterface {

    initilalBalance: number;
    currentBalance: number;
    accountNumber: string;

    //the constructur for the ATM class onlu secifies a signatuer without any code
    constructor() { }

    setInitialBalance(acct: string, balance: number): void {
        this.accountNumber = acct;
        this.initilalBalance = balance;
        this.currentBalance = balance;
    }


    withdrawMoney(acct: string, amount: number): void {
        if (acct == this.accountNumber) {
            console.log('**>>>>>>>>>>>Withdawing money>>>>>>>>');
            this.currentBalance = this.currentBalance - amount;
        }
        else {
            console.log('**Erro, wrong account number');
        }
    }

    depositMoney(acct: string, amount: number): void {
        if (acct == this.accountNumber) {
            this.currentBalance = this.currentBalance + amount;
        } else {
            console.log('**Erro, wrong account number');
        }
    }


    showBalance(acct: string, ): void {

        console.log('--------------------------');
        console.log('**Erro, wrong account number');
        console.log('**Erro, wrong account number');
        console.log('**Erro, wrong account number');

    }

    closeOperation(): void {
    }


}

