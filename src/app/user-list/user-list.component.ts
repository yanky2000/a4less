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
  public user:User;

  @Input()
  public position: number;
  
  @Input()
  public isOdd:boolean;


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
