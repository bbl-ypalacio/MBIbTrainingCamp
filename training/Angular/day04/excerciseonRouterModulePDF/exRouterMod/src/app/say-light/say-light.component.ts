import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-say-light',
  templateUrl: './say-light.component.html',
  styleUrls: ['./say-light.component.css']
})
export class SayLightComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(dataparams => {
      console.log("hello say light");
    });
  }

}
