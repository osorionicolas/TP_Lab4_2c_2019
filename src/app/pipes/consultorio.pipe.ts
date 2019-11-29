import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consultorio'
})
export class ConsultorioPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == 0){
      return "Odontología";
    }
    if(value == 1){
      return "Odontología";
    }
    if(value == 2 || value == 4){
      return "Consultorio Externo";
    }
    if(value == 3){
      return "Psicología";
    }
  }

}
