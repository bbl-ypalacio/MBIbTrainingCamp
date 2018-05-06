import { Component } from '@angular/core';

import { SayDynamicBoldComponent } from './say-dynamic-bold/say-dynamic-bold.component';
import { SayLightComponent } from './say-light/say-light.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise on Router Module';
}
