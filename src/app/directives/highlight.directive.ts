import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elemRef: ElementRef) { 
    elemRef.nativeElement.style.backgroundColor = 'blue';
  }

}
