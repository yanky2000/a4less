import { Component } from '@angular/core';
import { users } from './mock-data';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'Its my app!';
  public logo: string = 'assets/images/logo.jpg';
  public width: number = 70;
  public placeholder: string = 'enter your name';
  public users: User[] = users;
  

  public currentUser: User = this.users[0];



  constructor() {
  }
}
