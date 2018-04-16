import { AtmInterface } from './AtmInterface';
export declare class Atm implements AtmInterface {
    initialBalance: number;
    currentBalance: number;
    accountNumber: string;
    constructor();
    setInitialBalance(acct: string, balance: number): void;
    withdrawMoney(acct: string, amount: number): void;
    depositMoney(acct: string, amount: number): void;
    showBalance(acct: string): void;
    closeOperation(): void;
}
