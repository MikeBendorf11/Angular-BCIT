import { Component, Input } from '@angular/core';

// Define third directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'third-directive',
    template: `<h4>LastName {{lastName}}</h4>`,
})
export class NewDirective3 {
  @Input()
  lastName :string;
}
