import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseDetailsComponent } from './expense-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
