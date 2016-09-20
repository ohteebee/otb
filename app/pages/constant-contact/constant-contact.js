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
var ConstantContact = (function () {
    function ConstantContact() {
        this.data = { name: '', email: '', about: '' };
        this.showSuccess = false;
        this.data = { name: '', email: '', about: '' };
    }
    ConstantContact.prototype.sendForm = function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                self.data = {};
                self.showSuccess = true;
                setTimeout(function () { self.showSuccess = false; }, 3000);
            }
        };
        xhr.open('POST', 'http://otb-api.herokuapp.com/api/email/plain', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
        xhr.send(JSON.stringify(data));
    };
    ConstantContact.prototype.makeMessage = function () {
        var msg = 'Email: ' + this.data.email + '\nAbout: ' + this.data.about
            + '\nFrom: ' + this.data.name;
        return msg;
    };
    ConstantContact = __decorate([
        core_1.Component({
            selector: 'constant-contact',
            templateUrl: 'app/pages/constant-contact/constant-contact.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ConstantContact);
    return ConstantContact;
}());
exports.ConstantContact = ConstantContact;
