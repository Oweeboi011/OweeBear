import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ridelibrary',
  templateUrl: './ridelibrary.component.html'
})
export class RidelibraryComponent {
  pageTitle: string = "Route library";
  pageDescription: string = "Route for all LASPAGAN and NIGHT WOLF Sessions. All are referenced via GOOGLE MAP API.";

  ridelibraryThumbnails = [
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Event Name Sample',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }
  ];

}
