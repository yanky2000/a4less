import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
// export class SearchComponent implements OnInit {
export class SearchComponent {

  @Input()
  public placeholder: string;

  @Output()
  public search:EventEmitter<string> = new EventEmitter();

}
