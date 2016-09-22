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
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var http_2 = require('@angular/http');
// import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
var ConstantContact = (function () {
    function ConstantContact(http, router) {
        this.http = http;
        this.router = router;
        this.items = [];
        this.data = {};
        this.processing = false;
        this.questions = [
            "Where was your first Job?",
            "What was your first phone number?",
            "What was your first teacher's name?",
            "Who was your best childhood friend?",
            "What is your father's middle name?"
        ];
        this.showSuccess = false;
        this.showError = false;
        // this.testing = af.database.list('items');
        this.resetData();
    }
    ConstantContact.prototype.sendForm = function () {
        if (this.validate()) {
            this.processing = true;
            var data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
            var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
            var options = new http_2.RequestOptions({ headers: headers });
            var self_1 = this;
            this.http.post('https://otb-api.now.sh/api/email/plain', data)
                .toPromise()
                .then(function (res) {
                res = res.json();
                console.log(res);
                if (res.success < 0) {
                    self_1.displayError();
                }
                else {
                    self_1.showSuccess = true;
                }
                self_1.processing = false;
            })
                .catch(self_1.handleError);
        }
        else {
            this.displayError();
        }
        //
    };
    ConstantContact.prototype.displayError = function () {
        this.showError = true;
        var self = this;
        setTimeout(function () { self.showError = false; }, 4000);
    };
    ConstantContact.prototype.handleError = function () {
        console.log('error sending form');
    };
    ConstantContact.prototype.validate = function () {
        if ((this.data.email).length && (this.data.name).length && (this.data.security.answer).length) {
            return true;
        }
        return false;
    };
    ConstantContact.prototype.makeMessage = function () {
        var msg = this.data.organization + '\n' + this.data.website + '\n' +
            this.data.name + '\n' + this.data.email + '\n' + this.questions[this.data.security.question] + ' -> ' + this.data.security.answer;
        return msg;
    };
    ConstantContact.prototype.resetData = function () {
        this.data = { website: '', organization: '', name: '', email: '', security: { question: '-1', answer: '' } };
    };
    ConstantContact.prototype.test = function (q) {
        console.log(q);
        this.data.security.question = q;
    };
    ConstantContact.prototype.dismiss = function () {
        this.showSuccess = false;
        this.resetData();
    };
    ConstantContact = __decorate([
        core_1.Component({
            selector: 'constant-contact',
            templateUrl: 'app/pages/constant-contact/constant-contact.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], ConstantContact);
    return ConstantContact;
}());
exports.ConstantContact = ConstantContact;
