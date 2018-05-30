import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
  public atmservice : AtmserviceProvider
  ) {
    this.atmservice.logOff();
    this.navCtrl.setRoot("LoginPage");

  }

}
