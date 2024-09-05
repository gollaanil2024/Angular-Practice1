import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { Directive } from '@angular/core';
import { DirectiveComponent } from './components/directive/directive.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'careers',component:CareersComponent},
    {path:'products',component:ProductsComponent},
    {path:'Productdetails/:id',component:ProductdetailsComponent},
    {path:'user',component:DirectiveComponent},
    {path:'',component:HomeComponent},
    {path:'**',component:NotfoundComponent},
   

];
