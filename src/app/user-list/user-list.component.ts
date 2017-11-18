import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

export class UserListComponent   {

  @Input()
  public user: User;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

  @Output()
  public userSelected = new EventEmitter();


  public width: number = 150;
  public currentUser: User;


  public setCurrentUser(user: User): void {
    this.userSelected.emit(user);
  }
}
