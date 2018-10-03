import { Component } from '@angular/core';
import { ViewFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent {
  title = 'app';

  myKeyDown(event) {  
    console.log(event)
    console.log(event.key)
  }
  myKeyUp(e){
      console.log('up');
      console.log(e);
      console.log(e.key);
  }
}