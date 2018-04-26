import { AtmInterface } from './AtmInterface';
import * as got from 'got';

export class Atm implements AtmInterface {

    initialBalance: number;
    currentBalance: number;
    accountNumber: string;

    // The constructor for the ATM class only specifies a signature without any code
    constructor() {

    }
    //TODO:
    //isAliveConnection()
    //use loadash for db
    //Put logic in webervice

    isAliveConnection(): void {
        got.get(`http://localhost:3000/atm/isAliveConnection`).then(
            (result) => {
                let data = JSON.parse(result.body);

                console.log("\n>>>>isAliveConnection<<<<<<<<");
                console.log("Status  is :" + data.status);
                console.log("Message is :" + data.message);
            });
    }

    setInitialBalance(acct: string, balance: number): void {
        got.get(`http://localhost:3000/atm/setInitialBalance/${acct}/balance/${balance}`).then(
            (result) => {
                let data = JSON.parse(result.body);

                console.log("\n>>>>setInitialBalance<<<<<<<<");
                console.log("Account Number :" + data.account);
                console.log("Initial Balance:" + data.newBal);
            });
    }

    withdrawMoney(acct: string, amount: number): void {
        got.get(`http://localhost:3000/atm/withdraw/${acct}/amount/${amount}`).then(
            (result) => {
                let data = JSON.parse(result.body);

                console.log("\n>>>>withdrawMoney<<<<<<<<");
                console.log(" Account Number :" + data.account);
                console.log(" Avaliable BZD  :" + data.newBal);
            });
    }

    depositMoney(acct: string, amount: number): void {
        got.get(`http://localhost:3000/atm/deposit/${acct}/amount/${amount}`).then((result) => {
            let data = JSON.parse(result.body);

            console.log("\n>>>>depositMoney<<<<<<<<");
            console.log("Account Number   :" + data.account);
            console.log("Avaliable balance:" + data.newBal);
        });
    }

    showBalance(acct: string): void {
        got.get(`http://localhost:3000/atm/ShowBalance/${acct}`).then((result) => {
            let data = JSON.parse(result.body);

            console.log("\n>>>>showBalance<<<<<<<<");
            console.log("Account Number  :" + data.account);
            console.log("Current Balance :" + data.newBal);
        });
    }

    accountExists(acct: string): void {
        got.get(`http://localhost:3000/atm/AccountExists/${acct}`).then((result) => {
            let data = JSON.parse(result.body);

            console.log("\n>>>>accountExists<<<<<<<<");
            console.log("accountExists?  :" + data.status);
        });
    }

    getLastOperations(acct: string): void {
        got.get(`http://localhost:3000/atm/GetLastOperations/${acct}`).then((result) => {
            let data = JSON.parse(result.body);

            console.log("\n>>>>getLastOperations<<<<<<<<");
            console.log("LastOperations  :" + data.lastOperations);
        });
    }

    closeOperation(): void {
        console.log("\n>>>>closeOperation<<<<<<<<");
        this.initialBalance = this.currentBalance;
    }






}