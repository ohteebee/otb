import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Landing, ConstantContact, Camping } from './pages/index';
const appRoutes: Routes = [
    { path: 'landing', component: Landing },
    { path: 'constant-contact', component: ConstantContact },
    { path: 'camping', component: Camping },
    { path: '**', component: Landing },
    { path: '', component: Landing }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
