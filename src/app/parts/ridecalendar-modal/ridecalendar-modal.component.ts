import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule, Headers } from '@angular/http';

@Component({
  selector: 'ridecalendar-modal-part',
  templateUrl: './ridecalendar-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class RideCalendarModal {
  rawResult: string;
  closeResult: string;
  gameString: string;
  modalTitle: string;
  modalSubTitle: string;
  modalDate: string;
  modalContent: string;
  modalAuthor: string;
  modalPhotog: string;
  modalThumbnail: string;
  modalLink: string;

  constructor(private modalService: NgbModal, private http: Http) { }
  //constructor(private http: Http) { }

  @Input() inputPartString: string;
  openLg(content) {
    console.log(this.inputPartString);
    //const functionURI = 'https://devshiftappsvc.azurewebsites.net/api/TriggerSQLCall?eventId=' + this.inputPartString;
    const functionURI = 'https://devshiftappsvc.azurewebsites.net/api/functionAppSQLWriteUps/name/' + this.inputPartString;
    {name}
    console.log(functionURI);
    let input = {
      name: "Azure",
    };

    let headers = new Headers();  
    headers.append('Content-Type', 'application/json');
    this.http.get(functionURI, { headers: headers }).subscribe(data => {
      console.log(data);

      this.rawResult = data.text();

      this.modalTitle = this.rawResult.split('|')[0].toString().replace('"','');
      this.modalSubTitle = this.rawResult.split('|')[1].toString().replace('"','');
      this.modalDate = this.rawResult.split('|')[2].toString().replace('"','');
      this.modalContent = this.rawResult.split('|')[3].toString().replace('"','');
      this.modalThumbnail = this.rawResult.split('|')[4].toString().replace('"','');
      this.modalAuthor = this.rawResult.split('|')[5].toString().replace('"','');
      this.modalPhotog = this.rawResult.split('|')[6].toString().replace('"','');
      this.modalLink = this.rawResult.split('|')[7].toString().replace('"','');
      this.modalService.open(content, { size: 'lg' });
    });
  }

}