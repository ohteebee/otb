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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var http_2 = require('@angular/http');
var Camping = (function () {
    function Camping(router, http) {
        this.router = router;
        this.http = http;
        this.email = '';
        this.showForm = false;
        this.formData = { name: '', email: '', about: '' };
        this.showSuccess = false;
    }
    Camping.prototype.sendForm = function () {
        var self = this;
        self.processing = true;
        var data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post('https://otb-api.now.sh/api/email/plain', data)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            self.showForm = false;
            self.resetData();
            self.processing = false;
            self.showSuccess = true;
            setTimeout(function () { self.showSuccess = false; }, 3000);
        })
            .catch(this.handleError);
        //
    };
    Camping.prototype.extractData = function (res) {
        var body = res.json();
        alert(JSON.stringify(body));
        return body.data || {};
    };
    Camping.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    Camping.prototype.makeMessage = function () {
        var msg = 'Email: ' + this.formData.email + '\nAbout: ' + this.formData.about
            + '\nFrom: ' + this.formData.name;
        return msg;
    };
    Camping.prototype.resetData = function () {
        this.formData = { name: '', email: '', about: '' };
    };
    Camping = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'camping',
            templateUrl: 'camping.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], Camping);
    return Camping;
}());
exports.Camping = Camping;
