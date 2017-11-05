import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appShow]'
})
export class ShowDirective {

  constructor() { }

  @HostListener('input', ['$event.target.value'])
  public show(val) {
    console.log(val)
  }

}
