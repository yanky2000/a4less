import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Its my app!';
  public logo: string = 'assets/images/logo.jpg';
  public width: number = 70;
  public placeholder: string = 'enter your name';


  constructor() {
  }
}
