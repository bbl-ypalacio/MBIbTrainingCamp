import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController} from  'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';


/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  withdrawForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public atmServiceProvider : AtmserviceProvider, public alertCtrl: AlertController,
    public toastCtrl : ToastController, public loadCtrl : LoadingController) {

      this.withdrawForm = new FormGroup({
        amount : new FormControl('', Validators.required),
      });
      
  }

  makeAWithdrawal(){

    let loader = this.loadCtrl.create({content: 'Submitting'});
    loader.present();

    let amount = this.withdrawForm.get("amount").value;
    let accountNumber = this.atmServiceProvider.getAccountNumber();

    //validation for withdrawal amount
    if(amount <= this.atmServiceProvider.currentBalance){
      this.atmServiceProvider.withDraw(accountNumber, amount).then (
        (succ) => {
          loader.dismiss();
          let depositAlert = this.alertCtrl.create({
            title: 'Withdraw Successful',
            subTitle: "Account Number:" + accountNumber,
            buttons: ['OK']
          });
          depositAlert.present();
          this.navCtrl.pop();
        }, 
        (err) => {
          let toast = this.toastCtrl.create({message: "Withdraw Unsuccessful!", duration: 3000});
          loader.dismiss();
          toast.present();
          this.navCtrl.pop();
        }
      );
    }else{
      let toast = this.toastCtrl.create({message: "Amount exceeds available balance!", duration: 3000});
          loader.dismiss();
          toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawPage');
  }

}