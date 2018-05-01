import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html'
})
export class AppheaderComponent {

  //breadcrumb
  loginDetails =
    { name: '', password: 'X' }

      //breadcrumb
  menuOptions = [
    { title: 'Home', urlstring: '/apphome' },
    { title: 'Ride Archives', urlstring: '/ridelibrary' },
    { title: 'Laspagan Sesh', urlstring: '/ridecalendar' },
    { title: 'Bikes | Members', urlstring: '/' },
    { title: 'About', urlstring: '/about' }

  ];
}
