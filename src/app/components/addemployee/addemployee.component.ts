// import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css',
  outputs: ['addempEvent']
})

export class AddemployeeComponent {
  Name:string='';
  Email:string='';
  Address:string='';
  Phone:string='';
  @ViewChild('ModalClose') ModalClose:any;
  addempEvent = new EventEmitter();

  AddEmployee() {
    let newemployee = {
      "id": 100,
      "name": this.Name,
      "username": "Bret",
      "email": this.Email,
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": this.Phone,
      "website": "http://hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }

    this.addempEvent.emit(newemployee);
    this.ModalClose.nativeElement.click();
    this.Name=" ";
    this.Email=" ";
    this.Phone=" ";
  }
}
