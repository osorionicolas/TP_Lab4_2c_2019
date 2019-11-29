import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appConsultorioOcupado]'
})
export class ConsultorioOcupadoDirective {

  target: any;
  constructor() { }

  @HostListener('click', ['$event']) onClick($event){
    $event.currentTarget.parentElement.parentElement.style.background = "red";
  }

}
