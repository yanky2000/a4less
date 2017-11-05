import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrdirsComponent } from './attrdirs.component';
import { ShowDirective } from './show.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AttrdirsComponent,
    ShowDirective
  ],
  exports: [ShowDirective,AttrdirsComponent]
})
export class AttrsModule { }
