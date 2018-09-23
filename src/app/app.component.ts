import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>Hello world!  {{title}}</h1>
               <second-directive [firstName]="author"></second-directive>`
})
export class AppComponent {
    public title = 'This is Angular!';
    public author = "Joyce.";
}