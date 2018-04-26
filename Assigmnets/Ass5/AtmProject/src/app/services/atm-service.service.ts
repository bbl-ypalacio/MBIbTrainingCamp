import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtmTnterface } from '../interface/interface';


@Injectable()
export class AtmServiceService {

  //private URLEP = "http://localhost:3000/atm/";

  public balance: number;

  constructor() { }
 // constructor(public http: HttpClient) { }

  
  getBalance(acctNumber: string) {
    this.balance = 100;
    return this.balance;
    //return this.http.get<AtmTnterface>(this.URLEP +"ShowBalance/"+acctNumber);
  };


  withdrawal(acctNumber: string, amount: number){
    this.balance = 100;
    return this.balance;
    //return this.http.get<AtmTnterface>(this.URLEP + "withdraw/" + acctNumber + "/amount/" + amount);
  };


  depositMoney(acctNumber: string, amount: number){
    this.balance = 100;
    return this.balance;
   // return this.http.get<AtmTnterface>(this.URLEP + "deposit/" + acctNumber + "/amount/" + amount);
  };

  lastTransactions(acctNumber: string, amount: number): string {

    //this.balance = 220;

    return "Show records...";
  };

}
