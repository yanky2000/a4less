import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    SearchModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
