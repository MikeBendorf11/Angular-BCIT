import { Component } from '@angular/core';
import { ChildComponent } from './app.child';
// This component consumes the re-usable service.
@Component({
  selector: 'app-root',
  template: `
  <div *ngFor="let op of operations">
  <child [childFuncRef]="parentFuncRef" [childFuncRef2]="parentFuncRef2" [opType]="op" [numbers]="this.generateNumber()"></child>
  </div>`
})
export class AppComponent {
  public parentFuncRef: Function;
  public parentFuncRef2: Function;
  public operations:Array<any>;

  public ngOnInit() {
    // Create a reference to function within this component.
    this.parentFuncRef = this.myCallBackFunction.bind(this);
    this.parentFuncRef2 = this.secondCallbackFunction.bind(this);
    this.operations = ['+','-','*', '/'];
  }
  // This function can be called by child.
  public myCallBackFunction(operation) {
    alert("Received from child: " + operation);
  }
  public secondCallbackFunction(number) {
    alert("Received from child: " + number);
  }
  generateNumber(){
    return Math.random();    
  }
}