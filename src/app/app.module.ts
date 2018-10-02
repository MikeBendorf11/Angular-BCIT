import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import {SectionContainerComponent} from './app.sectionContainer';
import { S1Page1Component } from './components/section1/section1.page1';
import { S1Page2Component } from './components/section1/section1.page2';
import { s1Router } from './components/section1/section1.routing';
import { S2Page1Component } from './components/section2/section2.s2page1';
import { S2Page2Component } from './components/section2/section2.s2page2';
import { s2Router } from './components/section2/section2.routing';


@NgModule({
  declarations: [
    Section1Component,
    S1Page1Component,
    S1Page2Component,
    Section2Component,
    S2Page1Component,
    S2Page2Component,
    SectionContainerComponent],
  imports: [
    BrowserModule, s1Router, s2Router
  ],
  providers: [],
  bootstrap: [SectionContainerComponent]
})
export class AppModule { }
