import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '';
  balance = 0;
  depost = 0;
  withdraw = 0;
  /*status          = '';
  message         = '';
  account         = '';
  newBal          = 0;
  lastOperations  = [];*/

  constructor(public atmService: AtmServiceService) {
    this.title    = 'ATM Demo';
    this.balance  = atmService.getBalance("23232-1");//atmService.getBalance("23232-1");//
    this.depost   = atmService.depositMoney("23232-1", 500);
    this.withdraw = atmService.withdrawal("23232-1", 500);

  }

}
