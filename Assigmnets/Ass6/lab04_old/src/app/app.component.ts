/*
* This is the component for LAB 03 - Developing an Angular App 
* mocking up the data provided by the Service.
* by EyC Consulting Group www.eycgrupo.com
*/
import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';
import { AtmResponseOperation } from './models/atm.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ATM Project ';

  constructor(public atmService: AtmServiceService) {
  }

  public isPanelVisible() {
    return this.atmService.accountValid;
  }

}
