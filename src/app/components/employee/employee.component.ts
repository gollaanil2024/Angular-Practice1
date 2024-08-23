import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { employee } from '../../model/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  Employeelist: employee[]=[];
  Name:string='';
  Email:string='';
  Address:string='';
  Phone:string='';
  // url: any ="https://fakestoreapi.com/users";
  url: any ="http://localhost:3000/employees";
  constructor(private employeeservice:EmployeeService) { }
  ngOnInit() 
  {
    this.employeeservice.fetchemployee(this.url).subscribe((response: any) => {
      debugger;
         this.Employeelist=response;  
    });
  };
  deleteemployee(indexid: number) {
    debugger;
    this.employeeservice.Deleteemployee(this.url, indexid).subscribe((response: any) => {
      this.ngOnInit();
    });
  };
 
  AddEmployee() {
    let newemployee = {
      "id": this.Employeelist.length + 1,
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
    this.employeeservice.Addemployee(this.url, newemployee).subscribe((response: any) => {
      debugger;
      Swal.fire({
        title: "success",
        text: "Employee added successfully!",
        icon: "success"
      });
      // this.ModalClose.nativeElement.click();
      this.Name = " ";
      this.Email = " ";
      this.Phone = " ";   
      this.ngOnInit();
    });
  }
}
