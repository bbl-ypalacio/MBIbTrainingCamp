import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { AtmTransaction } from '../../models/atm.interface';

/**
 * Generated class for the TransactionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-list',
  templateUrl: 'transaction-list.html',
})
export class TransactionListPage {

  transactions : Array<AtmTransaction> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public atmService : AtmserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionListPage');
  }

  ionViewWillEnter() {
    this.atmService.getLastOperations(this.atmService.getAccountNumber()).subscribe(data => {
      
      this.transactions = data.transactions;
      this.transactions[0].accountNumber;
      this.transactions[0].amount;
    });
  }

  goToDetails(item:AtmTransaction) {
    this.navCtrl.push("TransactionDetailPage", {item: item});
  }



}
