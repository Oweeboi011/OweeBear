import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html'
})
export class AppHomeComponent {
  title: string = 'app';
  name: string = 'app';
  bike: string = 'app';

  aboutUS: string = 'Read more ABOUT US..';
  readMore: string = 'Read more..';
  //main page banner
  hotseatString: string = 'devshift: LASPAGAN 3.0';
  landingPageheaderTitle: string = 'devshift:';
  landingPageheaderSubTitle: string = '  spin all day';
  landingPageheader: string = 'To connect with nature and the sheer experience of cycling are the main reasons why we ride.We are diverse and quirky at the same time, seems insane right? But if you are willing to put up with that, we would like to have you in our group!Welcome to DEVSHIFT!';

  //strava source
  stravaURL = 'https://www.strava.com/clubs/341092/latest-rides/dd699be860cf5efe002aeb86cae23462b15c819a?show_rides=true';
  //first divider
  firstDividerTitle: string = 'laspagan kwatro: ';
  firstDividerSubTitle: string = 'puray offroad spin';
  firstDividerContent: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  firstDividerThumbnail: string= '/assets/images/LASPAGAN_4THUMN.jpg';
  firstDividerlink: string = '/home';

  //second divider
  secondDividerTitle: string = 'laspagan tres: ';
  secondtDividerSubTitle: string = 'revpal climb.';
  secondDividerContent: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  secondDividerThumbnail: string = '/assets/images/LASPAGAN_3THUMN.jpg';
  secondDividerlink: string = '/home';
  //breadcrumb
  menuOptions = [
    { title: 'Home' },
    { title: 'Ride | Events' },
    { title: 'Calendar' },
    { title: 'Bikes | Members' },
    { title: 'About' }

  ];

  //breadcrumb
  loginDetails =
    { name: '', password: 'X' }

  //past ride section
  pastrides = {
    title: 'Past Ride: Laspagan 2.0',
    lastdate: 'Feb 2, 2018',
    url: './assets/images/laspagandos_1.jpg',
    longdesc: 'Pililia Windmill Farm then we decided to take the "Laguna Loop"',
    tip: 'Laspagan Dos'
  }
  //featured ride section
  featrider = {
    title: 'Elzar and his FUJI 26er',
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

}
