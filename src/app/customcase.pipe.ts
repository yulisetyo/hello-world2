import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcase'
})
export class CustomcasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let words = value.split(" ");
    for(let i=0; i<words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }    
    return words.join(" ");
  }

}
