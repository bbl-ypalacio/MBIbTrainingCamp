import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtmInterface } from '../interface/interface';

@Injectable()
export class AtmServiceService {  

  private URLEP = "http://localhost:3000/atm/";
  constructor(public http: HttpClient) { }

  //public balance: number;
 //constructor() { }
  
  getBalance(acctNumber: string) {
    //this.balance = 100;
    //return this.balance;
    return this.http.get<AtmInterface>(this.URLEP +"ShowBalance/"+acctNumber);
  };

  withdrawal(acctNumber: string, amount: number){
    //this.balance = 200;
    //return this.balance;
    return this.http.get<AtmInterface>(this.URLEP + "withdraw/" + acctNumber + "/amount/" + amount);
  };
  
  depositMoney(acctNumber: string, amount: number){
    //this.balance = 300;
    //return this.balance;
   return this.http.get<AtmInterface>(this.URLEP + "deposit/" + acctNumber + "/amount/" + amount);
  };

  lastTransactions(acctNumber: string, amount: number): string {

    //this.balance = 220;
    return "Show records...";
  };

}
