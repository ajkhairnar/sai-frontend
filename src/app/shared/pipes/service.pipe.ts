import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {

  transform(value:any, service:string) {
    if(service==="")
    {
      return value;
    }
  
    const serviceArray:any[]=[];
    for(let i=0;i<value.length;i++)
    {
      let servicestatus:string=value[i].service;
      if(servicestatus.startsWith(service))
      {
        serviceArray.push(value[i])
      }
    }
      
  return serviceArray;
  }

}
