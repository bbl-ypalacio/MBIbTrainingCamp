import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentBalace : number = 0;
  acccountName : string = '';

  constructor(public navCtrl: NavController, public atmService: AtmserviceProvider ) {   
  }

  ionViewWillEnter(){
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp=>{
      this.acccountName = resp.accountName;
      this.currentBalace = resp.currentBalance;
    })
  }

  ionViewCanEnter(): boolean{
    return this.atmService.accountValid;
  }

  getAccountNumber(): string{
    return this.atmService.getAccountNumber();
  }

  /*
  getAccountBalance(): number{
    return this.currentBalace;
  }*/

  getCurrentBalance() {
    return this.atmService.getCurrentBalance(this.atmService.accountNumber);
  }

  getAccountName(): string {
    return this.acccountName;
  }

  makeDeposit() {
    this.navCtrl.push("DepositPage");
  }

  makeWithdraw() {
    this.navCtrl.push("WithdrawPage");
  }





}
