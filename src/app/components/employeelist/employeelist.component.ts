// import { Component } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';
import { EmployeecrudComponent } from '../employeecrud/employeecrud.component';
import { AddemployeeComponent } from "../addemployee/addemployee.component";


@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [AddemployeeComponent],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css',
  inputs: ['employeeobj'],
  outputs: ['delempEvent']
})
export class EmployeelistComponent {
  employeeobj:any;
  delempEvent = new EventEmitter();

  deleteemployee(Employee:any){
    this.delempEvent.emit(Employee);
  }
}
