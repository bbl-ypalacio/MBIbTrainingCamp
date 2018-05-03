import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../services/atm-service.service';
import { AtmResponseOperation } from '../models/atm.interface';

@Component({
  selector: 'app-atmoperations',
  templateUrl: './atmoperations.component.html',
  styleUrls: ['./atmoperations.component.css']
})
export class AtmoperationsComponent implements OnInit {
  
  public currentOperation = '';
  public atmResponse      : AtmResponseOperation = <AtmResponseOperation>{}; 
 
  constructor(public atmService : AtmServiceService) { }

  ngOnInit() {
 

    this.atmService.onUpdateAccountNumber$.subscribe(resp => {

          console.log("resp =>",resp);
          let acctNumber = this.atmService.getAccountNumber();

          this.showBalance(acctNumber);
          setTimeout(() => {
                     this.makeADeposit(acctNumber,100);
                }, 2000);

          setTimeout(() => {
                   this.makeAWithdraw(acctNumber,50);
                }, 4000);


    }); 
 
  }

  showBalance(acct:string) {

    this.currentOperation = 'Querying Balance';

    this.atmService.getCurrentBalance(acct).subscribe(result => {
            this.atmResponse = result;
     });

  }

  makeADeposit(acct:string,amount:number) {

    this.currentOperation = "Making a Deposit";

    this.atmService.deposit(acct,amount).then( result => {
               this.atmResponse = result;
    });
    
  }

  makeAWithdraw(acct:string,amount:number) {

       this.currentOperation = "Making a Withdrawl";

        this.atmService.withDraw(acct,amount).then( result => {
                this.atmResponse = result;
      });  
  }

  showPanel(){
    return this.atmService.accountValid;
  }

}
