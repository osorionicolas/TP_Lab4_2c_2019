import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appExportar]'
})
export class ExportarDirective {

  constructor() { }
  
  @HostListener('click', ['$event']) onClick($event){
    document.getElementById("exportar").style.backgroundColor = "magenta";
  }
}
