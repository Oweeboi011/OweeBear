import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './pages/about/about.component';
import { RidecalendarComponent } from './pages/ridecalendar/ridecalendar.component';
import { RidelibraryComponent } from './pages/ridelibrary/ridelibrary.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppHomeComponent } from './pages/apphome/app-home.component';
import {routes } from './app.routes';
import { AppComponent } from './app.component';

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
