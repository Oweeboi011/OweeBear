import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RideCalendarModal } from "../ridecalendar-modal/ridecalendar-modal.component";
import { Http, HttpModule, Headers } from '@angular/http';

@Component({
    selector: 'laspagan-writeups',
    templateUrl: 'laspagan-writeups.component.html'
})

export class LaspagaWriteups {
    title = 'app';
    name: string = 'app';
    bike: string = 'app';
    readMore: string = '/home';
    // constructor(private http : Http) { }
    calendarModal: RideCalendarModal;
    modalService: NgbModal;

    constructor(private http: Http) { }
    laspaganWriteupArray = [
        //laspagan5
        {
            'laspaganTitle': 'laspagan singko: ',
            'laspagandate': 'JUNE 2-3, 2018',
            'laspaganSubTitle': 'kaybiang loop',
            'laspaganContent': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            'laspaganThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
            'laspaganauthoreditors': 'Words by Anonymous',
            'laspagan4link': '/ridecalendar'
        },
        //laspagan4
        {
            'laspaganTitle': 'night wolf 2.0: ',
            'laspagandate': 'MAY 13, 2018',
            'laspaganSubTitle': 'cavite - antipolo',
            'laspaganContent': 'Every cyclists want to have a ride wherein they can relax and enjoy the place where they are going. A waterfalls will be a great destination to go to especially during summer. So we planned to go Puray Falls in Rodriguez Rizal last April 28, 2018....',
            'laspaganThumbnail': '/assets/images/NIGHT_WOLF_2.jpg',
            'laspaganauthoreditors': 'Words by Anonymous',
            'laspagan4link': '/ridecalendar'
        },
        //laspagan4
        {
            'laspaganTitle': 'laspagan kwatro: ',
            'laspagandate': 'APRIL 28-29, 2018',
            'laspaganSubTitle': 'puray falls',
            'laspaganContent': 'Every cyclists want to have a ride wherein they can relax and enjoy the place where they are going. A waterfalls will be a great destination to go to especially during summer. So we planned to go Puray Falls in Rodriguez Rizal last April 28, 2018....',
            'laspaganThumbnail': '/assets/images/LASPAGAN_4THUMN.jpg',
            'laspaganauthoreditors': 'Words by Christian Llannos',
            'laspagan4link': '/ridecalendar'
        },
        //laspagan4
        {
            'laspaganTitle': 'night wolf 1.0: ',
            'laspagandate': 'APRIL 22, 2018',
            'laspaganSubTitle': 'cavite - moa',
            'laspaganContent': 'Every cyclists want to have a ride wherein they can relax and enjoy the place where they are going. A waterfalls will be a great destination to go to especially during summer. So we planned to go Puray Falls in Rodriguez Rizal last April 28, 2018....',
            'laspaganThumbnail': '/assets/images/NIGHT_WOLF_1.jpg',
            'laspaganauthoreditors': 'Words by Anonymous',
            'laspagan4link': '/ridecalendar'
        },
        //laspagan3
        {
            'laspaganTitle': 'laspagan tres: ',
            'laspagandate': 'MARCH 4-5, 2018',
            'laspaganSubTitle': 'revpal climbing',
            'laspaganContent': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            'laspaganThumbnail': '/assets/images/LASPAGAN_3THUMN.jpg',
            'laspaganauthoreditors': 'Words by Anonymous',
            'laspagan4link': '/ridecalendar'
        },
        //laspagan2
        {
            'laspaganTitle': 'laspagan dos: ',
            'laspagandate': 'MARCH 4-5, 2018',
            'laspaganSubTitle': 'laguna loop',
            'laspaganContent': 'Haven’t been yet to Bangui Ilocos to see the huge windmills of the north? From the busy streets of Manila is a nearby City called Rizal where you can see the tall and majestic structures that not only are eco-friendly but also helps to give electrical energy for its neighboring barangays.....',
            'laspaganThumbnail': '/assets/images/LASPAGAN_2THUMN.jpg',
            'laspaganauthoreditors': 'Words by Joma Silvestre',
            'laspagan4link': '/ridecalendar'
        },
        //laspagan1
        {
            'laspaganTitle': 'laspagan uno: ',
            'laspagandate': 'FEBRUARY 2-3, 2018',
            'laspaganSubTitle': 'norzagaray hills',
            'laspaganContent': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            'laspaganThumbnail': '/assets/images/LASPAGAN_1THUMN.jpg',
            'laspaganauthoreditors': 'Words by Anonymous',
            'laspagan4link': '/ridecalendar'
        },
        //laspagan1
        {
            'laspaganTitle': 'laspagan: ',
            'laspagandate': 'OCTOBER 14, 2017',
            'laspaganSubTitle': 'first kaybiang tunnel',
            'laspaganContent': 'When you think about the perfect riding scene you picture sunny skies, green trees, flat roads and endless blue skies above. But alas, we were given a good dose of expectations vs reality. For starters October 4 is not a sunny day, its raining in fact and day before we are thinking to cancel it due to weather forecast. But we hoped the condition to improve, it did, so we pushed through as expected......',
            'laspaganThumbnail': '/assets/images/LASPAGAN_0THUMN.jpg',
            'laspaganauthoreditors': 'Words by Fred Bibar',
            'laspagan4link': '/ridecalendar'
        }
    ];
    ngOnInit(): void {

        const functionURI = 'https://devshiftappsvc.azurewebsites.net/api/TriggerSQLCall?eventId=%22Laspagan%205%22';
        console.log(functionURI);
        let input = {
            name: "Azure",
          };
      

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');      
          this.http.post(functionURI, input, { headers: headers } ).subscribe(data => {
            console.log(data);
          });
    }

}