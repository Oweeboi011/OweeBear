import {Component, ViewEncapsulation, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'googlemap-modal',
  templateUrl: './googlemap-modal.component.html',
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
export class GoogleMapModal {
  closeResult: string;
  gameString: string;
  modalTitle: string;
  constructor(private modalService: NgbModal) {}
  @Input() inputPartString: string;
  openLg(content) {
    // console.log(this.inputPartString);
    console.log(content);
    this.modalTitle = this.inputPartString;
    this.modalService.open(content, { size: 'lg' });
  }

}