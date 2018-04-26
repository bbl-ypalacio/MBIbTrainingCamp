import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AtmServiceService } from './services/atm-service.service';
import { AtmComponent } from './atm/atm.component';


@NgModule({
  declarations: [
    AppComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
