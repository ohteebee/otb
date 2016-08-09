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
        this.phrase = '';
        this.periods = '';
        this.index = 1;
        this.phrase = 'Outside The Box';
        this.periods = '...';
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
    Landing.prototype.subscribe = function () {
        //
        //   let xhr = new XMLHttpRequest();
        //   let self=this;
        //   xhr.onreadystatechange = function() {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //       self.email = '';
        //     }
        //   }
        //   xhr.open('POST', 'http://otb-api.herokuapp.com/api/email', true);
        //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //   xhr.send('to=mierze@gmail.com&from=TrimblesTreats Mail Service<' + this.email + '>&subject=New email!&message=' + this.email);
        //
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
