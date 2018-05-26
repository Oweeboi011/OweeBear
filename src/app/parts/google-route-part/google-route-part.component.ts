import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
    selector: 'google-route-part',
    templateUrl: 'google-route-part.component.html',
    styles: [`
    #map {
        height: 500px;
      }
  `],
})

export class GoogleRoutePart {
   
ngOnInit() {

    var directionsService = new google.maps.DirectionsService;
   var directionsDisplay = new google.maps.DirectionsRenderer;
   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 14.3667171, lng: 121.0691485}
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var waypts = [];
      var checkboxArray:any[] = [
          'Lancaster Village 1, Advincula Ave, Kawit, 4104 Cavite', 
          'Evia Lifestyle Center, Daang Hari Road, Almanza Dos, Las Piñas, 1750 Kalakhang Maynila',
          'Nuvali, Santa Rosa - Tagaytay Rd, Don Jose, Santa Rosa, 4025 Laguna',
          'Nuvali Blvd, Don Jose, Santa Rosa, Laguna',
          '226 Santa Rosa - Tagaytay Rd, Tagaytay, Cavite',
          'Sky Ranch, Tagaytay - Nasugbu Hwy, Kaybagal South, Tagaytay, Cavite',
          'Ciudad Adelina, Trece Martires, Cavite',
          '296 Gov Ferrer Dr, General Trias, Cavite',
          'Graham Bell, Imus, Cavite'
  ];
  for (var i = 0; i < checkboxArray.length; i++) {
        waypts.push({
          location: checkboxArray[i],
          stopover: true
        });
    }
    directionsService.route({
      origin: {lat: 14.4113677, lng: 120.9018867},
      destination: {lat: 14.411096, lng: 120.9029749},
      waypoints: waypts,
      provideRouteAlternatives: false,
    //   optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}

}