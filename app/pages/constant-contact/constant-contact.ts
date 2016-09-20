import {Component} from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
// import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'constant-contact',
    templateUrl: 'app/pages/constant-contact/constant-contact.html'
})
export class ConstantContact {
  items: any = [];
  data: any = {name: '', email: '', about: ''};
  showSuccess: boolean = false;
  constructor(private http: Http) {
    // this.testing = af.database.list('items');
    this.resetData();
  }

  sendForm() {
    let data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let self = this;
    this.http.post('https://otb-api.herokuapp.com/api/email/plain', data)
        .toPromise()
        .then(res => {
          console.log(res.json());
          self.resetData();
          self.showSuccess = true;
          setTimeout(function() { self.showSuccess = false }, 3000);
        }
      )
        .catch(self.handleError);
    //

  }
  handleError() {
    console.log('error sending form');
  }
  makeMessage() {
      let msg = 'Email: ' + this.data.email + '\nAbout: ' + this.data.about
          + '\nFrom: ' + this.data.name;
      return msg;
  }
  resetData() {
    this.data = {name: '', email: '', about: ''};
  }
}
