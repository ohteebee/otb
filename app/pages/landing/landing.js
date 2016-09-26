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
var Landing = (function () {
    function Landing(http) {
        this.http = http;
        this.email = '';
        this.showForm = false;
        this.phrase = '';
        this.formData = { name: '', email: '', about: '' };
        this.showSuccess = false;
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
    Landing.prototype.sendForm = function () {
        var data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var self = this;
        return this.http.post('https://otb-api.now.sh/api/email/plain', data)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            self.showForm = false;
            self.resetData();
            self.showSuccess = true;
            setTimeout(function () { self.showSuccess = false; }, 3000);
        })
            .catch(this.handleError);
        //
    };
    Landing.prototype.extractData = function (res) {
        var body = res.json();
        alert(JSON.stringify(body));
        return body.data || {};
    };
    Landing.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    Landing.prototype.makeMessage = function () {
        var msg = 'Email: ' + this.formData.email + '\nAbout: ' + this.formData.about
            + '\nFrom: ' + this.formData.name;
        return msg;
    };
    Landing.prototype.resetData = function () {
        this.formData = { name: '', email: '', about: '' };
    };
    Landing = __decorate([
        core_1.Component({
            selector: 'landing',
            templateUrl: 'app/pages/landing/landing.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Landing);
    return Landing;
}());
exports.Landing = Landing;
