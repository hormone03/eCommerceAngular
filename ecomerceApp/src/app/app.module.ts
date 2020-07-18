import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{NagivationComponent} from './link_path/nagivation/nagivation.component';
import { PaginationComponent } from './link_path/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    NagivationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
