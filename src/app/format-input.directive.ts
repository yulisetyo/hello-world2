import { Directive, HostListener, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {
  @Input('format') txtformat;
  constructor(private el:ElementRef) { }
  @HostListener('blur') onblur(){
    let value:string = this.el.nativeElement.value;
    // change format
    if(this.txtformat == 'uppercase'){
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }
}
