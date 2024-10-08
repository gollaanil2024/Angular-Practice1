import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [DatabindingComponent,FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  flag: boolean = false;
  show: boolean = false;
  selectedstate = '';
  Nofcharacters = '0';
  Input1=0;
  Input2=0;
  Operator= '';
  mode=false
  counterValue = 0;

  showhideparagraph() 
  {
    this.flag = !this.flag;
  }
   password() 
   {
    this.show = !this.show;
  };

  calculate()
  {
     if(this.Operator=='*')
        return Number(this.Input1) * Number(this.Input2);
     if(this.Operator=='+')
      return Number(this.Input1) + Number(this.Input2);
     if(this.Operator=='-')
      return Number(this.Input1) - Number(this.Input2);
    else
    return 0;
  };

  toggleMode() {
    this.mode = !this.mode;
    if (this.mode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };
  
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }

}
 