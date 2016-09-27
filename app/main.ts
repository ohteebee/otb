// import { platformBrowser }    from '@angular/platform-browser';
import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// import { AppModuleNgFactory } from './app.module.ngfactory';

// import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';

// platformBrowser().bootstrapModule(AppModuleNgFactory);
platformBrowserDynamic().bootstrapModule(AppModule);
