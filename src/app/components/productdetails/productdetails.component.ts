import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product :any
 
constructor (private activatedroute:ActivatedRoute, private httpClient:HttpClient){};

ngOnInit() {
  this.activatedroute.params.subscribe(params => {
     const id = +params['id']; 

     this.httpClient.get('https://jsonplaceholder.typicode.com/users/${id}').subscribe
  });
}	

}
