import { AtmInterface } from './AtmInterface';
import * as got from 'got'; 

export class Atm implements AtmInterface {
	
	initialBalance 	: number;
    currentBalance 	: number;
    accountNumber 	: string;

    // The constructor for the ATM class only specifies a signature without any code
    constructor () {
        
     }
	 //TODO:
	 //isAliveConnection()
	 //use loadash for db
	 //Put logic in webervice

	 isAliveConnection(){
		 got.get(`http://localhost:3001/atm`).then (
			 (result) => {
				   let data = JSON.parse(result.body);

				   console.log("\n>>>>isAliveConnection<<<<<<<<");
				   console.log("Status  is :"+ data.status);
				   console.log("Message is :"+ data.message);
			});		 
	 }
	 
    setInitialBalance(acct: string, balance: number): void {                 
	   got.get(`http://localhost:3001/atm/setInitialBalance/${acct}/balance/${balance}`).then(
		   (result) => {
			   let data = JSON.parse(result.body);

			   console.log("\n>>>>setInitialBalance<<<<<<<<");
			   console.log("Account Number :" + data.account);
			   console.log("Initial Balance:" + data.amount);
			   console.log("Current Balance:" + data.amount);
	   });
     }
    
    withdrawMoney(acct: string, amount: number): void {	         			 
			 
		got.get(`http://localhost:3001/atm/withdraw/${acct}/amount/${amount}`).then( 
			(result) => {
				let data = JSON.parse(result.body);               

				console.log("\n>>>>withdrawMoney<<<<<<<<");
				console.log(" Account Number :" + data.account);
				console.log(" Withdrew  BZD  :" + data.amount);	
				console.log(" Avaliable BZD  :" + data.newBal);
				});         
     }

     depositMoney(acct: string, amount : number) : void {
         			            
		got.get(`http://localhost:3001/atm/deposit/${acct}/amount/${amount}`).then((result) => {
			let data = JSON.parse(result.body);

			console.log("\n>>>>depositMoney<<<<<<<<");
			console.log("Account Number   :"+data.account);
			console.log("Amount deposited :"+data.amount);
			console.log("Avaliable balance:"+data.newBal);
		});
         
     }

     showBalance(acct:string) :void {		
		 got.get(`http://localhost:3001/atm/${acct}`).then( (result) => {
			let data = JSON.parse(result.body);
			
		  console.log("\n>>>>showBalance<<<<<<<<");
		  console.log("Account Number  :" + data.account);
		  console.log("Current Balance :" + data.newBal);
		}); 
     }
   
     closeOperation() : void {
         this.initialBalance = this.currentBalance ;
     }
}