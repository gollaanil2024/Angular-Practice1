import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectiveComponent } from "../directive/directive.component";
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DatabindingComponent, DirectiveComponent,CommonModule,ProductsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
