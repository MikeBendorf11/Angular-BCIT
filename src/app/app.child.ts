import { Component, Input } from '@angular/core';

@Component({
    selector: 'child',
    template: `<input type="submit" value="{{opType}}"    
                     (click)="callParent()"/>
                `
})
export class ChildComponent {
    @Input()
    public childFuncRef: Function;

    @Input() 
    public opType:string;

    callParent() {
        this.childFuncRef(this.opType);
    }
}