import { Injectable } from '@angular/core';

@Injectable()
export class AtmServiceService {

  public balance: number;
  public pluto: string;

  constructor() {
    this.pluto = "Yserri"
    this.balance = 500;
  }

  getAccountBalance(acctNumber: string): number {
    return this.balance;
  };
  getLastTransactionAmount(acctNumber: string): number {
    return this.balance;
  };
  withDrawMoney(acctNumber: string, amount: number): number {
    return this.balance;
  };

//This will return a new balance
  depositMoney(acctNumber: string, amount: number): number{
    return this.balance;
  };
//This will return a new balance

}
