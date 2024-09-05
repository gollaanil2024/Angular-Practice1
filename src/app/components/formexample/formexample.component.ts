import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formexample',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formexample.component.html',
  styleUrl: './formexample.component.css'
})
export class FormexampleComponent {
  userDetails = {
    Name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: '',
    Acceptterms:"",
    Comments:""
  };

  submitForm(form: any): void {
    debugger;
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }

}
