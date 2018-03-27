import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { RidecalendarComponent } from './pages/ridecalendar/ridecalendar.component';
import { RidelibraryComponent } from './pages/ridelibrary/ridelibrary.component';
import { AppHomeComponent } from './pages/apphome/app-home.component';

import { AppheaderComponent } from './parts/appheader/appheader.component';
import { InfiniteCarouselComponent } from "./parts/infinite-carousel/infinite-carousel.component";
import { DemoModule } from './parts/appcalendar/appcalendar.module';
import { DemoComponent } from './parts/appcalendar/appcalendar.component';

import {routes } from './app.routes';

import { SelectModule } from 'ng-select'
import { UICarouselModule } from "ui-carousel";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RidelibraryComponent,
    RidecalendarComponent,
    AppheaderComponent,
    AppHomeComponent,
    InfiniteCarouselComponent
    

  ],
  imports: [
    BrowserModule,
    routes,
    UICarouselModule,
    SelectModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
