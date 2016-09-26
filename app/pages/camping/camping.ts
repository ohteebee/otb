import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'camping',
    templateUrl: 'app/pages/camping/camping.html'
})
export class Camping {
  constructor(private router: Router) {
  }

}
