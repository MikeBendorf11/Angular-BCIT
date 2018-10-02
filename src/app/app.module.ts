import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import {ChildComponent } from './app.child';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }