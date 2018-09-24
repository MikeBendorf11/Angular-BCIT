import { Component } from '@angular/core';
@Component({
    template: `This is page b. {{retrievedFromStorage}}
    <input type="input"  (ngModelChange)="mychange($event)" [ngModel]="asd">
    `
})
export class PageBComponent {
    constructor() {

    }
    mychange(val:string) {
        sessionStorage.setItem("autosave", val);
        console.log(val); // updated value
    }
}