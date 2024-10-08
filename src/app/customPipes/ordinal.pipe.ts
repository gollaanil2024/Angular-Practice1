import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {

  transform(value:any, ...args: unknown[])
  {   
    if (value > 0) 
      {
      if (value > 3 && value < 21)
        return value + 'th';
      switch (value % 10) {
        case 1: return value + "st";
        case 2: return value + "nd";
        case 3: return value + "rd";
        default: return value + "th";
      }
    }
    else
    return "";

  }
}
