import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appBtnSelected]'
})
export class BotonSeleccionadoDirective {

    @HostBinding('style.backgroundColor') backgroundColor: string;
    defaultColor: string = 'white';
    @Input() highlightColor: string;

    constructor() {
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = this.defaultColor;
    }
}
