import { Component } from '@angular/core';
@Component({
    template: `This is page b. {{retrievedFromStorage}}
    <input type="input"  (change)="mychange($event)" >
    
    `
})
export class PageBComponent {
    asd: string;
    constructor() {

    }
    mychange(e) {
        sessionStorage.setItem("autosave", e.target.value);
        this.asd = e.target.value;
        console.log(e); // updated value
    }
}