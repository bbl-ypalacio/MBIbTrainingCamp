import { AtmInterface } from './AtmInterface';
import { got } from 'got';

export class Atm implements AtmInterface {

    initialBalance : number;
    currentBalance : number;
    accountNumber : string;

    // The constructor for the ATM class only specifies a signature without any code
    constructor () {
        
     }

    setInitialBalance(acct: string, balance: number): void {
        /*
        got.get('http://localhost:3000/${acct}/amount/${balance}').then(result){
            let data = JSON.parse(result);
        };*/

               this.accountNumber = acct;
               this.initialBalance = balance;
               this.currentBalance = balance;
     }
    
     withdrawMoney(acct: string, amount : number ) : void {
         if (acct == this.accountNumber ){
                console.log(">>>> withdrawing money <<<<<<<<");
                this.currentBalance = this.currentBalance - amount;
         }
         else {
              console.log('**Error, wrong account number*');
         }
     }

     depositMoney(acct: string, amount : number) : void {

         if (acct == this.accountNumber){

            this.currentBalance = this.currentBalance + amount;

         }
         else {
             console.log("**Error, wrong account number*");
         }

     }

     showBalance(acct:string) :void {

          console.log("--------------------------");
          console.log(" Acct No." + this.accountNumber);
          console.log(" Initial Balance  BZD " + this.initialBalance);
          console.log(" Current Balance  BZD " + this.currentBalance);

     }
   
     closeOperation() : void {
         this.initialBalance = this.currentBalance ;
     }
}