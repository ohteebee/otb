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
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('./pages/index');
var http_1 = require('@angular/http');
// import { Routes, RouterModule } from '@angular/router';
var app_1 = require('./app');
// import { AngularFireModule } from 'angularfire2';
var app_routing_1 = require('./app.routing');
exports.firebaseConfig = {
    apiKey: "AIzaSyAfCjnNMucQ4jskblhB_qed6Wo_1pCkoDw",
    authDomain: "store-72082.firebaseapp.com",
    databaseURL: "https://store-72082.firebaseio.com",
    storageBucket: "store-72082.appspot.com",
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule],
            declarations: [index_1.Landing, index_1.ConstantContact, app_1.App],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_1.App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
