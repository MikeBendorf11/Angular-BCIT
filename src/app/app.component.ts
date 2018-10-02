import { Component } from '@angular/core';
import {  MyNameService } from './app.mynameservice';

@Component({
    selector: 'app-root',
    template: `<button (click)="getSomeData()">Test GET Request</button>
                <ul>
                    <li *ngFor="let myData of myNames">{{myData.first}} 
                    {{myData.last}}</li>
                </ul>`,

    
})
export class AppComponent {
    myNames: Array<any>;
    _myDataService: MyNameService;

    constructor(myDataService: MyNameService) {
        this._myDataService = myDataService;
    }

    getSomeData() {
        this._myDataService.getNames()
            .subscribe(
            data => {
                this.myNames = data
                console.log(JSON.stringify(data))
            },
            error => {
                alert(error)
            },
            () => {
                console.log("Finished")
            });
    }
}