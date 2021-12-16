import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-lang',
  templateUrl: './add-lang.modal.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
  `]
})
export class AddLangModal {
  closeResult: string="";
  name: string = "";

  allData = [{ name: "French", value: "French" }, { name: "Spanish", value: "Spanish"}];
  
  dataChanged(event: any) {
    this.name = event.target.value;
    return this.name;
  }

  @Output() langAdded: EventEmitter<string> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    // this.modalService.open(content, {backdropClass: 'light-blue-backdrop', windowClass: 'show'});
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addLang(name: any){
      name=this.name;
      this.langAdded.emit(name);
  }
}

