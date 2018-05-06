import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-say-dynamic-bold',
  templateUrl: './say-dynamic-bold.component.html',
  styleUrls: ['./say-dynamic-bold.component.css']
})
export class SayDynamicBoldComponent implements OnInit {
    
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(dataparams => {
      console.log("hello say dynamic");
    });
  }

}
