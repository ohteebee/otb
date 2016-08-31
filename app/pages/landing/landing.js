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
var Landing = (function () {
    function Landing() {
        this.email = '';
        this.showForm = false;
        this.phrases = ['Outside the box...', 'On the ball...', 'On the brink...', 'Only the best...', 'On the bridge...', 'Occasional total brilliance...'];
        this.phrase = '';
        this.formData = {};
        this.index = 0;
        this.phrase = this.phrases[this.index];
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
    Landing.prototype.change = function () {
        if (this.index === this.phrases.length - 1) {
            this.index = 0;
        }
        else {
            this.index++;
        }
        this.phrase = this.phrases[this.index];
    };
    Landing.prototype.sendForm = function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                self.formData = {};
                self.showForm = false;
                self.showSuccess = true;
                setTimeout(function () { self.showSuccess = false; }, 3000);
            }
        };
        xhr.open('POST', 'http://otb-api.herokuapp.com/api/email/plain', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = { 'to': 'mierze@gmail.com', 'message': this.makeMessage() };
        xhr.send(JSON.stringify(data));
    };
    Landing.prototype.makeMessage = function () {
        var msg = 'Email: ' + this.formData.email + '\nAbout: ' + this.formData.about
            + '\nFrom: ' + this.formData.name;
        return msg;
    };
    Landing = __decorate([
        core_1.Component({
            selector: 'landing',
            templateUrl: 'app/pages/landing/landing.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Landing);
    return Landing;
}());
exports.Landing = Landing;
