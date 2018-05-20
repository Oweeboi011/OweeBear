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
    { title: 'HOME', urlstring: '/apphome' },
    { title: 'LASPAGAN SESH', urlstring: '/ridecalendar' },
    { title: 'ROUTE LIBRARY', urlstring: '/ridelibrary' },    
    // { title: 'Bikes | Members', urlstring: '/' },
    { title: 'ABOUT', urlstring: '/about' }

  ];
}
