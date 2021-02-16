import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BoardItemDetailsComponent } from './board-item-details/board-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
      BoardItemComponent,
      TopNavComponent,
      BoardItemDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
