import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { HighlightDirective } from './app.highlight.directive';
import { AppComponent }       from './app.component';

@NgModule({
  declarations: [
    AppComponent,HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }