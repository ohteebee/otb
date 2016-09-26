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
var App = (function () {
    function App(router) {
        this.router = router;
        this.phrases = ['Outside the box...', 'On the ball...', 'On the brink...', 'Only the best...', 'On the bridge...', 'Occasional total brilliance...'];
        this.index = 0;
        this.phrase = '';
        this.phrase = this.phrases[this.index];
    }
    App.prototype.change = function () {
        if (this.index === this.phrases.length - 1) {
            this.index = 0;
        }
        else {
            this.index++;
        }
        this.phrase = this.phrases[this.index];
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], App);
    return App;
    var _a;
}());
exports.App = App;
