import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input()
  public user: User;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

  public defImage: string = 'assets/images/user.png';
}
