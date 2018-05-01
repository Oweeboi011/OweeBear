import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

//pages
import { AboutComponent } from './pages/about/about.component';
import { RidecalendarComponent } from './pages/ridecalendar/ridecalendar.component';
import { RidelibraryComponent } from './pages/ridelibrary/ridelibrary.component';
import { AppHomeComponent } from './pages/apphome/app-home.component';
import { GearLibraryComponent } from './pages/gearlibrary/gearlibrary.component';

//parts
import { AppheaderComponent } from './parts/appheader/appheader.component';
import { InfiniteCarouselComponent } from "./parts/infinite-carousel/infinite-carousel.component";

//components/add0ins
import {routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
    InfiniteCarouselComponent,
    GearLibraryComponent
    
  ],
  imports: [
    BrowserModule,
    routes,
    UICarouselModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
