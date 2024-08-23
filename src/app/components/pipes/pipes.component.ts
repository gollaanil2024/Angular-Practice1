import { Component } from '@angular/core';
import { OrdinalPipe } from '../../customPipes/ordinal.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../customPipes/age.pipe';
import * as data from './Employee.json';
import { SalutationPipe } from '../../customPipes/salutation.pipe';
import { FilterPipe } from '../../customPipes/filter.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [OrdinalPipe,CommonModule,FormsModule,AgePipe,SalutationPipe,FilterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent 
{
  Employee = (data as any).default;
  userinputnumber:any;
  Date:any;
  Searchtext:string=""
}
