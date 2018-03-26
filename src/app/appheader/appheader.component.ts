import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent {

  //breadcrumb
  loginDetails =
    { name: '', password: 'X' }

      //breadcrumb
  menuOptions = [
    { title: 'Home', urlstring: '/apphome' },
    { title: 'Ride | Events', urlstring: '/ridelibrary' },
    { title: 'Calendar', urlstring: '/ridecalendar' },
    { title: 'Bikes | Members', urlstring: '/' },
    { title: 'About', urlstring: '/about' }

  ];
}
