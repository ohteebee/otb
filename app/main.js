"use strict";
// import { platformBrowser }    from '@angular/platform-browser';
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
// import { AppModuleNgFactory } from './app.module.ngfactory';
// import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
// platformBrowser().bootstrapModule(AppModuleNgFactory);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
