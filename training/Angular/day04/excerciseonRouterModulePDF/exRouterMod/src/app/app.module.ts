import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { SayDynamicBoldComponent } from './say-dynamic-bold/say-dynamic-bold.component';
import { SayLightComponent } from './say-light/say-light.component';

const appRoutes: Routes = [
                            { path: 'dybold', component: SayDynamicBoldComponent },
                            { path: 'sLight', component: SayLightComponent }
                          ];

@NgModule({
  declarations: [
    AppComponent,
    SayDynamicBoldComponent,
    SayLightComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
