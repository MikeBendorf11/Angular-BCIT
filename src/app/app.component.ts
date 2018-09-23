import { Component }     from '@angular/core';
import { MyDataService } from './myDataService';
import { MyDataService2 } from './myDataService2';

@Component({
    selector: 'app-root',
    template: `<h1>Hello world!  {{title}}</h1>
               <ul><li *ngFor="let name of names">{{name}}</li></ul>
               <h4>{{myName}}</h4>
               <h4>{{celcius}} Celcius = {{fahrenheit}} fahrenheit</h4>
               `
               ,
    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService, MyDataService2]
})
export class AppComponent {
    public title = 'This is Angular!';
    names: Array<any>;
    myName: string;
    celcius: number;
    fahrenheit: number;

    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(
      myDataService: MyDataService, 
      myDataService2: MyDataService2
    ) {
        this.celcius = 6;
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
        this.myName = myDataService.myName();
        this.fahrenheit = myDataService2.getfahrenheit(this.celcius);
        
    }
}