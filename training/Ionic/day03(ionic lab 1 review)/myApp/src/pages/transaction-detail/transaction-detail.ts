import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { AtmTransaction } from '../../models/atm.interface';

/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {

  transaction : AtmTransaction;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transaction = navParams.get("item"); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailPage');
  }

  dismissThis (){
    this.navCtrl.pop();
  }


}
