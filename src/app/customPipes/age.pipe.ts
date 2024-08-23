import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

 
  transform(dob: string | Date): number {

  if(dob!= undefined)
    {
    const today: Date = new Date();
    const birthDate: Date = new Date(dob); 
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();
    
     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
     } 
     return age;
     }
     else
     return 0;

  }
  
}
