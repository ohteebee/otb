import {Component} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';
// import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'constant-contact',
    templateUrl: 'app/pages/constant-contact/constant-contact.html'
})
export class ConstantContact {
  items: any = [];
  data: any = {};

  questions: any = [
    "Where was your first Job?",
    "What was your first phone number?",
    "What was your first teacher's name?",
    "Who was your best childhood friend?",
    "What is your father's middle name?"
  ];
  showSuccess: boolean = false;
  showError: boolean = false;
  constructor(private http: Http, private router: Router) {
    // this.testing = af.database.list('items');
    this.resetData();
  }

  sendForm() {
    if (this.validate()) {

    let data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let self = this;
    this.http.post('https://otb-api.herokuapp.com/api/email/plain', data)
        .toPromise()
        .then(res => {
          res = res.json();
          console.log(res);
          if (res.success < 0) {
            self.displayError();

          } else {
            self.showSuccess = true;
          }
        }
      )
        .catch(self.handleError);
      } else {
        this.displayError();
      }

    //

  }
  displayError() {
    this.showError = true;
    var self = this;
    setTimeout(function() { self.showError = false }, 4000);
  }
  handleError() {
    console.log('error sending form');
  }
  validate():boolean {
    if ((this.data.email).length && (this.data.name).length && (this.data.security.answer).length) {
      return true;
    }
    return false;

  }
  makeMessage() {
      let msg = this.data.organization + '\n' + this.data.website + '\n' +
      this.data.name + '\n' + this.data.email + '\n' + this.questions[this.data.security.question] + ' -> ' + this.data.security.answer;
      return msg;
  }
  resetData() {
    this.data = {website:'', organization: '', name: '', email: '', security: {question: '-1', answer: ''}};

  }
  test(q) {
      console.log(q)
      this.data.security.question = q;
  }
  dismiss() {
    this.showSuccess = false;
    this.resetData();
  }
}
