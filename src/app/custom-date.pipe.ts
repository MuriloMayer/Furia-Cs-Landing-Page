import { Pipe, PipeTransform } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value : Date | string): string {
    const date = new Date(value);
    const day = date.getDate();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    if(day > 1) {
      return `${('0' + day).slice(-2)}/${month}/${year}`;
    } else if (month) {
      return `${month}/${year}`;
    } else {
      return `${year}`;
    }
  }

}
