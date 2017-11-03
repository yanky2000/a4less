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
  public test = 'testing';

  public user1: user = {
    firstName: 'Mary',
    lastName: 'Doe',
    age: 34,
    sex: 'Female',
    photo: 'assets/images/user1.jpg',
    location: {
      city: 'NY',
      zip: 111423
    }
  };
  public user2: user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34,
    sex: 'Male',
    photo: 'assets/images/user2.jpg',
    location: {
      city: 'NY',
      zip: 111423
    }
  };
  public user3: user = {
    firstName: 'Lizy',
    lastName: 'Dodson',
    age: 24,
    sex: 'Female',
    photo: 'assets/images/user3.jpg',
    location: {
      city: 'LA',
      zip: 142353
    }
  };
  public user4: user = {
    firstName: 'Carl',
    lastName: 'Jenkins',
    age: 28,
    sex: 'Male',
    photo: 'assets/images/user4.jpg',
    location: {
      city: 'SF',
      zip: 2333651
    }
  };





  constructor() {
  }
}
