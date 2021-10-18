import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'area'
})
export class AreaPipe implements PipeTransform {

  transform(value:any, area:string) {
    if(area==="")
    {
      return value;
    }
  
    const areaArray:any[]=[];
    for(let i=0;i<value.length;i++)
    {
      let userstatus:string=value[i].area;
      if(userstatus.startsWith(area))
      {
        areaArray.push(value[i])
      }
    }
      
  return areaArray;
  }

}
