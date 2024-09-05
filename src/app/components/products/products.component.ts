import { Component } from '@angular/core';
import * as data from './products.json';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  myProducts = (data as any).default;
  page = 1;
  pageSize = 4;
  Searchtext = '';

  handlePageChange(event: number): void {
    this.page = event;
  };
  searchTitle(): void {
    this.page = 1;
  };

  Ascending() 
  {
    this.myProducts.sort((a: any, b: any) => a.price - b.price);
  };

  Decending() 
  {
    this.myProducts.sort((a: any, b: any) => b.price - a.price);
  };

}
