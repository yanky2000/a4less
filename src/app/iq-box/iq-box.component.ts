import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iq-box',
  templateUrl: './iq-box.component.html',
  styleUrls: ['./iq-box.component.css']
})
export class IqBoxComponent implements OnInit {

  // @Input()
  // public user1:user;

  @Input()
  public user: User;



  constructor() { }

  ngOnInit() {
  }

}
