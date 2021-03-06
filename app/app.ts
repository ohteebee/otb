import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Landing } from './pages/index';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.html'
})
export class App {
    phrases: string[] = ['Outside the box...', 'On the ball...', 'On the brink...', 'Only the best...', 'On the bridge...', 'Occasional total brilliance...'];
    index: number = 0;
    phrase: string = '';
    constructor(private router: Router) {
        this.phrase = this.phrases[this.index];
    }
    change() {
        if (this.index === this.phrases.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.phrase = this.phrases[this.index];
    }
}
