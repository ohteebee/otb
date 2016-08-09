import { Component } from '@angular/core';
import { Landing } from './pages/index';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [Landing]
})
export class App { }
