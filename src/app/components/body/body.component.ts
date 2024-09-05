import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectiveComponent } from "../directive/directive.component";
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeecrudComponent } from '../employeecrud/employeecrud.component';
import { EmployeeComponent } from '../employee/employee.component';
import { FormexampleComponent } from '../formexample/formexample.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DatabindingComponent
            , DirectiveComponent
            ,CommonModule
            ,ProductsComponent
            ,PipesComponent
            ,ParentComponent
            ,EmployeecrudComponent
            ,EmployeeComponent
            ,FormexampleComponent
          ,RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
