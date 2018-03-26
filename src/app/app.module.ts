import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RidecalendarComponent } from './ridecalendar/ridecalendar.component';
import { RidelibraryComponent } from './ridelibrary/ridelibrary.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppHomeComponent } from './apphome/app-home.component';
import {routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RidelibraryComponent,
    RidecalendarComponent,
    AppheaderComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
