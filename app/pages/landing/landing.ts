import {Component} from '@angular/core';


@Component({
    selector: 'landing',
    templateUrl: 'app/pages/landing/landing.html'
})
export class Landing {
    email: string = '';
    phrase: string = '';
    periods: string = '';
    index: number = 1;
    constructor() {
        this.phrase = 'Outside The Box';
        this.periods = '...';
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
