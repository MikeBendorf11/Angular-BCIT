import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewDirective } from './newDirective';
import { NewDirective3 } from './thirdDirective';

@NgModule({
  declarations: [
    AppComponent, NewDirective, NewDirective3
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
