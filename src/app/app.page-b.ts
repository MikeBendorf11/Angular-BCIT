import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    template: `ID: {{id}}<br/>
               Name: {{firstName}}`
})
export class PageBComponent {
    id: number;
    firstName: string;

    // The constructor sets up the class.
    constructor(private route: ActivatedRoute) {
        let str = "This is where the class is initialized.";
        route.params.forEach(params=>{
            this.id = params['id'];
            this.firstName = params['firstname'];
        })
    }
}