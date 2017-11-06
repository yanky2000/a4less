import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent,
  ]
})
export class SearchModule { }
