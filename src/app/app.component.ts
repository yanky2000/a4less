import { Component } from '@angular/core';

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

  public user1: user = {
    id: 1,
    firstName: 'Mary',
    lastName: 'Doe',
    age: 34,
    sex: 'Female',
    iq: 170,
    photo: 'assets/images/user1.jpg',
    location: {
      city: 'NY',
      zip: 111423
    }
  };
  public user2: user = {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    age: 34,
    sex: 'Male',
    iq: 155,
    photo: 'assets/images/user2.jpg',
    location: {
      city: 'NY',
      zip: 111423
    }
  };
  public user3: user = {
    id: 3,
    firstName: 'Lizy',
    lastName: 'Dodson',
    age: 24,
    sex: 'Female',
    iq: 200,
    photo: 'assets/images/user3.jpg',
    location: {
      city: 'LA',
      zip: 142353
    }
  };
  public user4: user = {
    id: 4,
    firstName: 'Carl',
    lastName: 'Jenkins',
    age: 28,
    sex: 'Male',
    iq: 186,
    photo: 'assets/images/user4.jpg',
    location: {
      city: 'SF',
      zip: 2333651
    }
  };

  public currentUser: user = this.user1;



  constructor() {
  }
}
