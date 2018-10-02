import {Routes, RouterModule} from '@angular/router';
import { S1Page1Component } from './section1.page1';
import { S1Page2Component } from './section1.page2';

const appRoutes: Routes = [
  {path:'page1', component: S1Page1Component},
  {path:'page2', component: S1Page2Component},
]

export const s1Router = RouterModule.forRoot(appRoutes)