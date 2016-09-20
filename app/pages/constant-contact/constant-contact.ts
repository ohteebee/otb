import {Component} from '@angular/core';


@Component({
    selector: 'constant-contact',
    templateUrl: 'app/pages/constant-contact/constant-contact.html'
})
export class ConstantContact {
  data: any = {name: '', email: '', about: ''};
  showSuccess: boolean = false;
  constructor() {
    this.data = {name: '', email: '', about: ''};
  }

  sendForm():void {
    let xhr = new XMLHttpRequest();
    let self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            self.data = {};
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
      let msg = 'Email: ' + this.data.email + '\nAbout: ' + this.data.about
          + '\nFrom: ' + this.data.name;
      return msg;
  }
}
