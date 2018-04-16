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
               this.accountNumber  = acct;
               this.initialBalance = balance;
               this.currentBalance = balance;

               console.log(">>>>setInitialBalance<<<<<<<<");
               console.log("Account Number :" + this.accountNumber);
               console.log("Initial Balance:" + this.initialBalance);
               console.log("Current Balance:" + this.currentBalance);
     }
    
    withdrawMoney(acct: string, amount: number): void {	
         if (acct == this.accountNumber ){			 
			 
			got.get(`http://localhost:3001/atm/withdraw/${acct}/amount/${amount}`).then( (result) => {
                let data = JSON.parse(result.body);
			
                this.currentBalance = this.currentBalance - amount;

            console.log(">>>>withdrawMoney<<<<<<<<");
            console.log(" Account Number :" + acct);
            console.log(" Withdrew  BZD  :" + amount);	
            console.log(" Avaliable BZD  :" + this.currentBalance);
			});
         }
         else {
              console.log('**Error, wrong account number*');
         }
     }

     depositMoney(acct: string, amount : number) : void {
         if (acct == this.accountNumber){			
            
            got.get(`http://localhost:3001/atm/deposit/${acct}/amount/${amount}`).then((result) => {
                let data = JSON.parse(result.body);

                this.currentBalance = this.currentBalance + amount;

                console.log(">>>>depositMoney<<<<<<<<");
                console.log("Amount deposited :"+ amount);
                console.log("Avaliable balance:" + this.currentBalance);
            }
            );
         }
         else {
             console.log("**Error, wrong account number*");
         }
     }

     showBalance(acct:string) :void {		
        got.get(`http://localhost:3001/atm/${acct}`).then( (result) => {
            let data = JSON.parse(result.body);
			
          console.log(">>>>showBalance<<<<<<<<");
          console.log("Account Number  :" + this.accountNumber);
          console.log("Current Balance :" + this.currentBalance);
        }); 
     }
   
     closeOperation() : void {
         this.initialBalance = this.currentBalance ;
     }
}