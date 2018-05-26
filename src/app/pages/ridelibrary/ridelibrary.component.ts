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
      'rlEventName': 'Laspagan 1: Cavite X Norzagaray',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Laspagan 2: Laguna Loop',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Laspagan 3: RevPal X Cavite Loop',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Night Wolf 1: Cavite X Moa',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Laspagan 4: Puray X Wawa Dam',
      'rlEventDescription': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      'rlThumbnail': '/assets/images/LASPAGAN_NOTHUMN.jpg',
      'rlEventName': 'Night Wolf 2: Cavite X Antipolo',
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
