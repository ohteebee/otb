import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  Landing, ConstantContact } from './pages/index';
import { App } from './app';
import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ Landing, ConstantContact, App ],
  providers: [appRoutingProviders],
  bootstrap: [ App ]

})
export class AppModule { }
