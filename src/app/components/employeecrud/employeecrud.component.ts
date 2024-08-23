import { Component } from '@angular/core';
import * as data from './Employee.json';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'
import { AddemployeeComponent } from '../addemployee/addemployee.component';

@Component({
  selector: 'app-employeecrud',
  standalone: true,
  imports: [CommonModule,FormsModule,EmployeelistComponent,AddemployeeComponent],
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.css',
})
export class EmployeecrudComponent {
  Employeelist = (data as any).default;

  Deleteemployee(empobj:any)
  {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => 
      {
      if (result.isConfirmed) 
        { 
          this.Employeelist.splice( this.Employeelist.findIndex(function(i:any){
            return i.id === empobj.id;
        }), 1);

      }
    });
    return this.Employeelist;
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }

  Addemployee (newemployee:any) 
  {
     this.Employeelist.push(newemployee);
      Swal.fire({
        title: "success",
        text: "Employee added successfully!",
        icon: "success"
      });
  }




}
