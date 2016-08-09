import {Component} from '@angular/core';


@Component({
    selector: 'landing',
    templateUrl: 'app/pages/landing/landing.html'
})
export class Landing {
    email: string = '';
    phrases: string[] = ['Outside the box...', 'On the ball...', 'On the brink...', 'On the bridge...'];
    phrase: string = '';
    periods: string = '';
    index: number = 0;
    constructor() {
        this.phrase = this.phrases[this.index];
        // while (true) {
        //     setTimeout(function() {
        //         console.log(this.index);
        //         this.periods = '';
        //         let test = this.index;
        //         while (test--) {
        //             this.periods += '.'
        //         }
        //         if (this.index === 3) {
        //             this.index = 1;
        //         } else this.index++;
        //     }, 500);
        // }
    }
    change() {
        if (this.index === this.phrases.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.phrase = this.phrases[this.index];
    }

    subscribe() {
        //
        //   let xhr = new XMLHttpRequest();
        //   let self=this;
        //   xhr.onreadystatechange = function() {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //       self.email = '';
        //     }
        //   }
        //   xhr.open('POST', 'http://otb-api.herokuapp.com/api/email', true);
        //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //   xhr.send('to=mierze@gmail.com&from=TrimblesTreats Mail Service<' + this.email + '>&subject=New email!&message=' + this.email);
        //
    }
}
