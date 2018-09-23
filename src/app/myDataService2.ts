export class MyDataService2{
  fahrenheit: number;
  celcius: number;

  getfahrenheit(celcius){
    this.celcius = celcius;
    this.fahrenheit = 1.8 * celcius + 32;
    return this.fahrenheit;
  }
}