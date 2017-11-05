import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appLog]'
})
export class LogDirective {

  constructor() { }

  @HostListener('input', ['$event.target.value'])
  public logInput(val) {
    console.log(val)
  }

}
