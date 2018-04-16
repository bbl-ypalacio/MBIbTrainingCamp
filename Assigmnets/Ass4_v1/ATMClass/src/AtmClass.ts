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
			   console.log(">>>>setInitialBalance<<<<<<<<");
               this.accountNumber = acct;
               this.initialBalance = balance;
               this.currentBalance = balance;
     }
    
     withdrawMoney(acct: string, amount : number ) : void {		 
         if (acct == this.accountNumber ){
			 console.log(">>>>withdrawMoney<<<<<<<<");
			 
			got.get(`http://localhost:3001/atm/withdraw/${acct}/amount/${amount}`).then( (result) => {
            let data = JSON.parse(result.body);
			
            this.currentBalance = this.currentBalance - amount;
			
			console.log(" Acct No." + this.accountNumber);
			console.log(" precious balance  BZD " + data.balance);		
			});
         }
         else {
              console.log('**Error, wrong account number*');
         }
     }

     depositMoney(acct: string, amount : number) : void {
         if (acct == this.accountNumber){
			console.log(">>>>depositMoney<<<<<<<<");
            this.currentBalance = this.currentBalance + amount;
         }
         else {
             console.log("**Error, wrong account number*");
         }
     }

     showBalance(acct:string) :void {		
        got.get(`http://localhost:3001/atm/${acct}`).then( (result) => {
            let data = JSON.parse(result.body);
			
          console.log(">>>>showBalance<<<<<<<<");
          console.log(" Acct No." + this.accountNumber);
          //console.log(" Initial Balance  BZD " + this.initialBalance);
          console.log(" Current Balance  BZD " + data.balance);
        }); 
     }
   
     closeOperation() : void {
         this.initialBalance = this.currentBalance ;
     }
}