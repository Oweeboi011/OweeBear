import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'link-footer',
    templateUrl: 'link-footer.component.html'
})

export class linkFooterComponent {
    title = 'app';
    name: string = 'app';
    bike: string = 'app';

     //foot
     footerHeader: string = 'DevShift since 2018';
    //instgram
    igHref: string = 'https://www.instagram.com/devshift01/';
    igAlt: string = 'Visit us in INSTAGRAM';
    igIMGsrc: string = 'http://sguru.org/wp-content/uploads/2018/01/best-instagram-logo-download-here-15.png';

    //fb
    fbHref: string = 'https://www.facebook.com/groups/383590185419438';
    fbAlt: string = 'Visit us in FACEBOOK';
    fbIMGsrc: string = 'http://bmighty2.com/wp-content/uploads/2014/04/1271084_10152203108461729_809245696_o-300x300.png';

    // //strava
    stvHref: string = 'https://www.strava.com/clubs/devShift';
    stvAlt: string = 'Catch us in STRAVA';
    stvIMGsrc: string = 'http://richardwalkslondon.com/wp-content/images/strava-icon40.jpg';


}