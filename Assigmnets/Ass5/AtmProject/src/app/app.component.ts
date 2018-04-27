import { Component } from '@angular/core';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';

import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { AtmInterface } from './interface/interface';
import { AtmServiceService } from './services/atm-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ATM Demo';
  balance = 0;
  status          = '';
  message         = '';
  account         = '';
  newBal          = 0;
  lastOperations  = [];
  atmInter: AtmInterface;

  constructor(public atmService: AtmServiceService) {
    
    atmService.getBalance("23232-1").subscribe(value => {
      this.account = value.account;
      this.balance = value.newBal;
    });
    
    atmService.withdrawal("23232-1", 50).subscribe(value => {
      this.account = value.account;
      this.balance = value.newBal;
    });

    atmService.depositMoney("23232-1", 20).subscribe(value => {
      this.account = value.account;
      this.balance = value.newBal;
    });

  }

}
