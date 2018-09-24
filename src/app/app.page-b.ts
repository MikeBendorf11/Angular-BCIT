import { Component } from '@angular/core';
@Component({
    template: `This is page b. {{retrievedFromStorage}}
    <input type="input" (change)="mychange()" [(ngModel)]="asd" >
    
    `
})
export class PageBComponent {
    asd: string;
    constructor() {
        this.asd =''
    }
    mychange() {
        sessionStorage.setItem("autosave", this.asd);
        console.log(this.asd); // updated value
    }
}