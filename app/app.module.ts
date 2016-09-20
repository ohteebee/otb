import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Landing, ConstantContact } from './pages/index';
import { HttpModule } from '@angular/http';
// import { Routes, RouterModule } from '@angular/router';
import { App } from './app';
// import { AngularFireModule } from 'angularfire2';
import { routing,
    appRoutingProviders } from './app.routing';

export const firebaseConfig = {
    apiKey: "AIzaSyAfCjnNMucQ4jskblhB_qed6Wo_1pCkoDw",
    authDomain: "store-72082.firebaseapp.com",
    databaseURL: "https://store-72082.firebaseio.com",
    storageBucket: "store-72082.appspot.com",
};
@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    declarations: [Landing, ConstantContact, App],
    providers: [appRoutingProviders],
    bootstrap: [App]

})
export class AppModule { }
