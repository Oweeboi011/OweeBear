import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, HttpModule, Headers } from '@angular/http';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
//pages
import { AboutComponent } from './pages/about/about.component';
import { RidecalendarComponent } from './pages/ridecalendar/ridecalendar.component';
import { RidelibraryComponent } from './pages/ridelibrary/ridelibrary.component';
import { AppHomeComponent } from './pages/apphome/app-home.component';
import { GearLibraryComponent } from './pages/gearlibrary/gearlibrary.component';

//parts
import { AppheaderComponent } from './parts/appheader/appheader.component';
import { InfiniteCarouselComponent } from "./parts/infinite-carousel/infinite-carousel.component";
import { linkFooterComponent } from "./parts/link-footer/link-footer.component";
import { LaspagaWriteups } from "./parts/laspagan-writeups/laspagan-writeups.component";
import { RideLibraryModal } from "./parts/ridelibrary-modal/ridelibrary-modal.component";
import { RideCalendarModal } from "./parts/ridecalendar-modal/ridecalendar-modal.component";
import { GoogleRoutePart } from "./parts/google-route-part/google-route-part.component";
import { GoogleMapModal } from "./parts/googlemap-modal/googlemap-modal.component";

//components/add0ins
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectModule } from 'ng-select'
import { UICarouselModule } from "ui-carousel";


@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    AboutComponent,
    RidelibraryComponent,
    RidecalendarComponent,
    AppheaderComponent,
    AppHomeComponent,
    InfiniteCarouselComponent,
    linkFooterComponent,
    LaspagaWriteups,
    RideLibraryModal,
    GearLibraryComponent,
    RideCalendarModal,
    GoogleRoutePart,
    GoogleMapModal
  ],
  imports: [
    BrowserModule,
    routes,
    UICarouselModule,
    SelectModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
