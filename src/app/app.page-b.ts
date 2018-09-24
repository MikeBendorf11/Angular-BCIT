import { Component } from '@angular/core';
@Component({
    template: `This is page b. {{retrievedFromStorage}}
    <input type="input" (change)="mychange()" [(ngModel)]="asd" >
    <input type="input" (change)="mychange2()" [(ngModel)]="asd2" >
    `
})
export class PageBComponent {
    asd: string;
    asd2: string;
    constructor() {
        this.asd =''
        this.asd2 =''
    }
    mychange() {
        sessionStorage.setItem("autosave", this.asd);
        console.log(this.asd); // updated value
    }
    mychange2() {
        sessionStorage.setItem("autosave2", this.asd2);
        console.log(this.asd2); // updated value
    }
}