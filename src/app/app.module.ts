import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { PageDefault }    from './app.pagedefault';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { routing }        from './app.routing';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, PageDefault,
        PageAComponent, PageBComponent, AboutComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }