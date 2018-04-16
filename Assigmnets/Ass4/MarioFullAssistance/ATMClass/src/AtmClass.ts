import { AtmInterface } from './AtmInterface';
import * as got from 'got'; 

export class Atm implements AtmInterface {

    initialBalance : number;
    currentBalance : number;
    accountNumber : string;

    // The constructor for the ATM class only specifies a signature without any code
    constructor () {
        
     }

    setInitialBalance(acct: string, balance: number): void {
       

               this.accountNumber = acct;
               this.initialBalance = balance;
               this.currentBalance = balance;
			   console.log("-----------you made it here(setInitialBalance) ---------------");
			   
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
 
        got.get(`http://localhost:3001/atm/${acct}`).then( (result) => {
            let data = JSON.parse(result.body);
			
		  console.log("--------------------------");
          console.log(" Acct No." + this.accountNumber);
          //console.log(" Initial Balance  BZD " + this.initialBalance);
          console.log(" Current Balance  BZD " + data.balance);
        });          

     }
   
     closeOperation() : void {
         this.initialBalance = this.currentBalance ;
     }
}