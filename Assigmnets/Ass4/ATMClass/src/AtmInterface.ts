export interface AtmInterface {

    /*
    *   These the encapsulated data of the ATM
    */
    initialBalance: number,
    currentBalance: number,
    accountNumber: string,

    /* 
    *   Method´s definition
    */

    isAliveConnection(): void,
    setInitialBalance(acct: string, balance: number): void,
    withdrawMoney(acct: string, amount: number): void,
    depositMoney(acct: string, amount: number): void,
    showBalance(acct: string): void,
    accountExists(acct: string): void,
    getLastOperations(acct: string): void,
    closeOperation(): void

}