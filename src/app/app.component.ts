import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { users } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'Its my app!';
  public logo: string = 'assets/images/logo.jpg';
  public width: number = 70;
  public placeholder: string = 'enter your name';
  public users: Observable<User[]> = users;
  public currentUser: User;

  public ngOnInit() {
    this.currentUser = {
      'id': 1,
      'first_name': 'Jane',
      'last_name': 'Goodlatt',
      'email': 'jgoodlatt0@redcross.org',
      'gender': 'Female',
      'photo': 'assets/images/user1.jpg',
    }
  }

}
