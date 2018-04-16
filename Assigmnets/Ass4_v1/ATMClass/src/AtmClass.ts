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

               if (acct == this.accountNumber) {
                   got.get(`http://localhost:3001/atm/setInitialBalance/${acct}/balance/${balance}`).then(
                       (result) => {
                           let data = JSON.parse(result.body);

                           console.log("\n>>>>setInitialBalance<<<<<<<<");
                           console.log("Account Number :" + data.account);
                           console.log("Initial Balance:" + data.amount);
                           console.log("Current Balance:" + this.currentBalance);
                   })
               } else {
                   console.log('**Error, wrong account number*');
               }

               
     }
    
    withdrawMoney(acct: string, amount: number): void {	
         if (acct == this.accountNumber ){			 
			 
			got.get(`http://localhost:3001/atm/withdraw/${acct}/amount/${amount}`).then( (result) => {
                let data = JSON.parse(result.body);
			
                this.currentBalance = this.currentBalance - amount;

                console.log("\n>>>>withdrawMoney<<<<<<<<");
                console.log(" Account Number :" + data.account);
                console.log(" Withdrew  BZD  :" + data.amount);	
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

                console.log("\n>>>>depositMoney<<<<<<<<");
                console.log("Account Number   :"+data.account);
                console.log("Amount deposited :"+data.amount);
                console.log("Avaliable balance:"+this.currentBalance);
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
			
          console.log("\n>>>>showBalance<<<<<<<<");
          console.log("Account Number  :" + data.account);
          console.log("Current Balance :" + this.currentBalance);
        }); 
     }
   
     closeOperation() : void {
         this.initialBalance = this.currentBalance ;
     }
}