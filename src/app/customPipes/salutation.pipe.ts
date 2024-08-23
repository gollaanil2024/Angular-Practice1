import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {

  transform(value: unknown, Gender:any): unknown {

    if(Gender=='Male')
    {
      return  "Mr. " +value;
    }
   else
   {
    return  "Mrs. " +value;
    }
    
  }

}
