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
  readMore: string = 'View whole content..';
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
  firstDividerThumbnail: string = '/assets/images/LASPAGAN_4THUMN.jpg';
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
  laspaganWriteupArray = [
    //laspagan4
    {
      'laspaganTitle': 'night wolf 2.0: ',
      'laspagandate': 'MAY 13, 2018',
      'laspaganSubTitle': 'cavite - antipolo',
      'laspaganContent': 'Night Ride from Cavite to Antipolo, Cloud Nine....',
      'laspaganThumbnail': '/assets/images/NIGHT_WOLF_2.jpg',
      'laspaganauthoreditors': 'Words by Anonymous',
      'laspagan4link': '/home'
    },
    //laspagan4
    {
      'laspaganTitle': 'laspagan kwatro: ',
      'laspagandate': 'APRIL 28-29, 2018',
      'laspaganSubTitle': 'puray falls',
      'laspaganContent': 'Every cyclists want to have a ride wherein they can relax and enjoy the place where they are going. A waterfalls will be a great destination to go to especially during summer. So we planned to go Puray Falls in Rodriguez Rizal last April 28, 2018....',
      'laspaganThumbnail': '/assets/images/LASPAGAN_4THUMN.jpg',
      'laspaganauthoreditors': 'Words by Christian Llannos',
      'laspagan4link': '/home'
    }
  ];

  addMember(value: any) {
    this.members.push({ "name": value.name, "bike": value.bike })
  }

}
