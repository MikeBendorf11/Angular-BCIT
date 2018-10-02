import { Component, Input } from '@angular/core';

@Component({
    selector: 'child',
    template: `<input type="submit" value="{{opType}}"    
                (click)="callParent()"/>
                <input type="button" value="{{numbers}}"    
                (click)="callParent2()"/>`
})
export class ChildComponent {
    @Input()
    numbers: string;

    @Input()
    public childFuncRef: Function;

    @Input()
    public childFuncRef2: Function;

    @Input() 
    public opType:string;

    callParent() {
        this.childFuncRef(this.opType);
    }
    callParent2() {
      this.childFuncRef2(this.numbers);
    }
}