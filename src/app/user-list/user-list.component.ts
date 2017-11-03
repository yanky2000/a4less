import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

export class UserListComponent implements OnInit {

  @Input()
  public user1;

  @Input()
  public user2;

  @Input()
  public user3;

  @Input()
  public user4;

  @Output()
  public choice = new EventEmitter();

  public width: number = 150;
  public currentUser;

  constructor() { }

  ngOnInit() {
  }

  public setCurrentUser(user): void {
    this.currentUser = user;
    console.log(user);
  }
}
