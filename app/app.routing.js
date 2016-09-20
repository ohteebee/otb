"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./pages/index');
var appRoutes = [
    { path: 'landing', component: index_1.Landing },
    { path: 'constant-contact', component: index_1.ConstantContact },
    { path: '**', component: index_1.Landing },
    { path: '', component: index_1.Landing }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
