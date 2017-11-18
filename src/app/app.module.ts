import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { IqBoxComponent } from './iq-box/iq-box.component';
import { UserFilterPipe } from './common/pipes/user-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserCardComponent,
    IqBoxComponent,
    UserFilterPipe,

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
