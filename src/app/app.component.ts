import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: number;
  numbers : Array<any>= [];
  displays: Array<string> = [];
  title = 'My Calc';
  pattern = '^[-]?[0-9]*[.]?[0-9]*$';

  constructor(){ }

  sum(){
    this.result = Number(this.numbers[0]) + Number(this.numbers[1]);
    this.round();
    this.displays[0] = `${this.numbers[0]} + ${this.numbers[1]} = ${this.result}`;
    this.clearEntries(0);
  }
  difference(){
    this.result = Number(this.numbers[2]) - Number(this.numbers[3]);
    this.round();
    this.displays[1] = `${this.numbers[2]} - ${this.numbers[3]} = ${this.result}`;
    this.clearEntries(1);
  }
  product(){
    this.result = Number(this.numbers[4]) * Number(this.numbers[5]);
    this.round();
    this.displays[2] = `${this.numbers[4]} * ${this.numbers[5]} = ${this.result}`;
    this.clearEntries(2);
  }
  quotient(){
    this.result = Number(this.numbers[6]) / Number(this.numbers[7]);
    this.round();
    this.displays[3] = `${this.numbers[6]} / ${this.numbers[7]} = ${this.result}`;
    this.clearEntries(3);
  }
  clearEntries(displayN){
    this.numbers.forEach((v,i) => this.numbers[i]='');
    for(let i=0; i<this.displays.length; i++){
      if(i==displayN) continue;
      this.displays[i]=''
    }    
  }
  round(){
    this.result = Math.round(this.result * 100) / 100;
    this.numbers.forEach((v,i) =>{ 
      this.numbers[i] = Math.round(this.numbers[i] * 100) / 100;
    });
  }
}
