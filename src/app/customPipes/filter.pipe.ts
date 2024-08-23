import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: any): any[] {

    if (value.SearchText != "") 
      {
      items = items.filter((prod: any) => {
        return JSON.stringify(prod).includes(value.SearchText);
      })
      return items;
    }
    else 
    {
      return items;
    }
  }
}
