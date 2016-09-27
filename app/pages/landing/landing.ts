import {Component} from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.html'
})
export class Landing {
    email: string = '';
    showForm: boolean = false;

    phrase: string = '';
    formData: any = { name: '', email: '', about: '' };
    showSuccess: boolean = false;
    constructor(private http: Http) {
        //   this.sendForm()
        // .then(hero => {
        //   console.log(hero);
        // });;
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
        let data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let self = this;
        return this.http.post('https://otb-api.now.sh/api/email/plain', data)
            .toPromise()
            .then(res => {
                console.log(res.json());
                self.showForm = false;
                self.resetData();
                self.showSuccess = true;
                setTimeout(function() { self.showSuccess = false }, 3000);
            }
            )
            .catch(this.handleError);
        //

    }
    private extractData(res: Response) {
        let body = res.json();
        alert(JSON.stringify(body))
        return body.data || {};
    }
    handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);

    }

    makeMessage() {
        let msg = 'Email: ' + this.formData.email + '\nAbout: ' + this.formData.about
            + '\nFrom: ' + this.formData.name;
        return msg;
    }
    resetData() {
        this.formData = { name: '', email: '', about: '' };
    }
}
