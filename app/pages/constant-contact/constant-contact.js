"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var http_2 = require('@angular/http');
// import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
var ConstantContact = (function () {
    function ConstantContact(http) {
        this.http = http;
        this.items = [];
        this.data = { name: '', email: '', about: '' };
        this.showSuccess = false;
        // this.testing = af.database.list('items');
        this.resetData();
    }
    ConstantContact.prototype.sendForm = function () {
        var data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var self = this;
        this.http.post('https://otb-api.herokuapp.com/api/email/plain', data)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            self.resetData();
            self.showSuccess = true;
            setTimeout(function () { self.showSuccess = false; }, 3000);
        })
            .catch(this.handleError);
        //
    };
    ConstantContact.prototype.makeMessage = function () {
        var msg = 'Email: ' + this.data.email + '\nAbout: ' + this.data.about
            + '\nFrom: ' + this.data.name;
        return msg;
    };
    ConstantContact.prototype.resetData = function () {
        this.data = { name: '', email: '', about: '' };
    };
    ConstantContact = __decorate([
        core_1.Component({
            selector: 'constant-contact',
            templateUrl: 'app/pages/constant-contact/constant-contact.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConstantContact);
    return ConstantContact;
}());
exports.ConstantContact = ConstantContact;
