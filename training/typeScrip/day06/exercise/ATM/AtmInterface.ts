export interface AtmInterface {
    /*
    These are the encapsulated data of the ATM
    */
    initilalBalance: number,
    currentBalance: number,
    accountNumber: string,

    /*
    Method deinition 
    */
    setInitialBalance(acct:string,balance: number): void,
    withdrawMoney(acct: string,amount: number): void,
    depositMoney(acct: string,amount: number): void,
    showBalance(acct: string, ): void,
    closeOperation(): void
}