import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule, 
    SearchModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
