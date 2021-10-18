import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let bg = [
     'bg-primary', 'bg-secondary', 'bg-success', 'bg-info', 
      'bg-warning', 'bg-danger', 'bg-dark', 'bg-gray', 'bg-light'
   ];
  
    return bg[Math.floor(Math.random() * bg.length)];
  }

}
