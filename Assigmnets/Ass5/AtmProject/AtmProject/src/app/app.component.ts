import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title   = '';
  balance = 0;
  
  constructor(public atmService: AtmServiceService) {
    this.title = 'ATM Demo';
    this.balance = atmService.depositMoney("Yserri", 500);

  }

}
