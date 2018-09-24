import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `<p>{{pNum | phonePipe }}</p>
  `,

})
export class AppComponent {
  pNum: string;
    constructor() {
        this.pNum = '2/34--5%678._90*1';
    }
}