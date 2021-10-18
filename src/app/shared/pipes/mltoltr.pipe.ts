import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mltoltr'
})
export class MltoltrPipe implements PipeTransform {

  //convert ml to ltr
  
  transform(value:number, ...args: unknown[]): unknown {
    
    let milk = value;

    return milk/1000;
     
  }

}
