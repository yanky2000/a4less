import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public AppTitle = "It's my app!";

  constructor() {
    // setTimeout(() => {
    //   this.title = "New heading for main page!";
    // }, 2000);
  }
}
