import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  balance = 500;

  constructor(public atmService: AtmServiceService) {
    this.title = atmService.pluto;
    this.balance = atmService.depositMoney("Yserri", 500);
  }

}
