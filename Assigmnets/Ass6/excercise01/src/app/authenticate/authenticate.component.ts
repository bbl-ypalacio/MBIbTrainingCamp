import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import {AtmServiceService} from '../services/atm-service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  theForm : FormGroup;

  constructor(public atmService : AtmServiceService) { }

  ngOnInit() {
    this.theForm = new FormGroup({
        accountNumber : new FormControl('',Validators.required)     
    }
    );
  }

  startOperations(){
      this.atmService.setAccountNumber(this.theForm.get("accountNumber").value); 
      
  }
}
