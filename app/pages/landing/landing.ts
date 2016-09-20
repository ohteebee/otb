import {Component} from '@angular/core';


@Component({
    selector: 'landing',
    templateUrl: 'app/pages/landing/landing.html'
})
export class Landing {
    email: string = '';
    showForm: boolean = false;

    phrase: string = '';
    formData: any = {name: '', email: '', about: ''};
    showSuccess: boolean = false;
    constructor() {

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


    sendForm() {
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                self.formData = {};
                self.showForm = false;
                self.showSuccess = true;
                setTimeout(function() { self.showSuccess = false }, 3000);
            }
        }
        xhr.open('POST', 'http://otb-api.herokuapp.com/api/email/plain', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
        xhr.send(JSON.stringify(data));
    }
    makeMessage() {
        let msg = 'Email: ' + this.formData.email + '\nAbout: ' + this.formData.about
            + '\nFrom: ' + this.formData.name;
        return msg;
    }
}
