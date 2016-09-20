import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Landing, ConstantContact } from './pages/index';
const appRoutes: Routes = [
    { path: 'landing', component: Landing },
    { path: 'constant-contact', component: ConstantContact },
    { path: '**', component: Landing },
    { path: '', component: Landing }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
