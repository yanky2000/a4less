import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttrsModule } from '../attrdirs/attrs.module';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
    AttrsModule
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent,
  ]
})
export class SearchModule { }
