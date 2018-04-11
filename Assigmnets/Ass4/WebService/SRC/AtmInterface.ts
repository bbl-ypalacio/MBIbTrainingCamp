export interface AtmInterface {

    /*
    *   These the encapsulated data of the ATM
    */
    initialBalance : number,
    currentBalance : number,
    accountNumber  : string,


    /* 
    *   Method´s definition
    */

    setInitialBalance(acct:string, balance : number ) : void,

    withdrawMoney(acct: string, amount : number ) : void,
    depositMoney(acct: string, amount : number) : void,

    showBalance(acct:string) :void,
    closeOperation() : void

}



















