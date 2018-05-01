import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  name: string = 'app';
  bike: string = 'app';
  

  //main page banner
  hotseatString: string = 'devshift: LASPAGAN 3.0';

  //past ride section
  pastrides = {
    title: 'Laspagan 4.0',
    lastdate: 'Feb 2, 2018',
    url: './assets/images/laspagandos_1.jpg',
    longdesc: 'Pililia Windmill Farm then we decided to take the "Laguna Loop"',
    tip: 'Laspagan Kwatro'
  }
  //featured ride section
  featrider = {
    title: 'Elzar and his fuji 26er',
    subhead: 'Elzar Eustaquio talks about his FUJI 26" MTB ',
    url: './assets/images/featone.jpg',
    longdesc: 'Pililia Windmill Farm then we decided to take the "Laguna Loop"',
    tip: 'Laspagan Dos'
  }

  members = [
    { "name": "Owee Penaranda", "bike": "Vision 26er" },
    { "name": "Elzar Eustaquio", "bike": "Fuji 26er" },
    { "name": "Joma Silvestre", "bike": "Mountainpeak 27.5" },
    { "name": "Joenas Biocarles", "bike": "Mosso 26er" }
  ];

  addMember(value: any) {
    this.members.push({ "name": value.name, "bike": value.bike })
  }
  getRouteURL(event:any) {
    alert(event.target.title);
  }
  
}

export class MemberList {

}
export class InfiniteCarouselComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() { }
}

