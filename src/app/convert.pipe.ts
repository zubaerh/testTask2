import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
    if(!value){
      return '';
    }
    else if(value<1048576){
      const x=value/1024;
      return x+' MB';
    }else{
      const y=value/1048576;
      return y+' GB';
    }
    
  }

}
