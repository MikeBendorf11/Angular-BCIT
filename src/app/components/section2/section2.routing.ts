import {Routes, RouterModule} from '@angular/router';
import { S2Page1Component } from './section2.s2page1';
import { S2Page2Component } from './section2.s2page2';

var routes : Routes =  [
  {path:'s2page1', component: S2Page1Component},
  {path: 's2page2', component: S2Page2Component}
]

export var s2Router = RouterModule.forRoot(routes);