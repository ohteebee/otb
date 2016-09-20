import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Landing } from './pages/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html'
})
export class App {
    phrases: string[] = ['Outside the box...', 'On the ball...', 'On the brink...', 'Only the best...', 'On the bridge...', 'Occasional total brilliance...'];
    index: number = 0;
    phrase: string = '';
    router: Router;
    constructor(private router: Router) {
        this.phrase = this.phrases[this.index];
        this.router = router;
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
