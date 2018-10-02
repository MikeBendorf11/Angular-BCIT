import { Component } from '@angular/core';
import { ChildComponent } from './app.child';
// This component consumes the re-usable service.
@Component({
  selector: 'app-root',
  template: `
  <div *ngFor="let op of operations">
  <child [childFuncRef]="parentFuncRef" [opType]="op"></child>
  </div>`
})
export class AppComponent {
  public parentFuncRef: Function;
  public operations:Array<any>;

  public ngOnInit() {
    // Create a reference to function within this component.
    this.parentFuncRef = this.myCallBackFunction.bind(this);
    this.operations = ['+','-','*', '/'];
  }
  // This function can be called by child.
  public myCallBackFunction(operation) {
    alert("Received from child: " + operation);
  }
}