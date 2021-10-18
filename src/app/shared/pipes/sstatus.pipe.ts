import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sstatus'
})
export class SstatusPipe implements PipeTransform {

  transform(value:any, status:string) {
    if(status==="")
    {
      return value;
    }
  
    const statusArray:any[]=[];
    for(let i=0;i<value.length;i++)
    {
      let adminstatus:string=value[i].is_status;
      if(adminstatus.startsWith(status))
      {
        statusArray.push(value[i])
      }
    }
      
  return statusArray;
  }

}
