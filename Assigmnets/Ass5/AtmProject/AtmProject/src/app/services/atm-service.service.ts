import { Injectable } from '@angular/core';
//import * as got from 'got';


@Injectable()
export class AtmServiceService {

  public balance: number;

  constructor() { }


  getBalance(acctNumber: string): number {

    this.balance = 100;

    return this.balance;
  };


  withdrawal(acctNumber: string, amount: number): number {

    this.balance = 50;

    return this.balance;
  };


  depositMoney(acctNumber: string, amount: number): number {

    this.balance = 220;

    return this.balance;
  };

  lastTransactions(acctNumber: string, amount: number): string {

    //this.balance = 220;

    return "Show records...";
  };





}
