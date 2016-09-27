/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./app.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/core/src/application_module');
var import4 = require('@angular/platform-browser/src/browser');
var import5 = require('@angular/router/src/router_module');
var import6 = require('@angular/http/src/http_module');
var import7 = require('@angular/common/src/localization');
var import8 = require('@angular/core/src/application_init');
var import9 = require('@angular/core/src/testability/testability');
var import10 = require('@angular/core/src/application_ref');
var import11 = require('@angular/core/src/linker/compiler');
var import12 = require('@angular/platform-browser/src/dom/events/hammer_gestures');
var import13 = require('@angular/platform-browser/src/dom/events/event_manager');
var import14 = require('@angular/platform-browser/src/dom/shared_styles_host');
var import15 = require('@angular/platform-browser/src/dom/dom_renderer');
var import16 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import17 = require('@angular/core/src/linker/view_utils');
var import18 = require('@angular/http/src/backends/browser_xhr');
var import19 = require('@angular/http/src/base_response_options');
var import20 = require('@angular/http/src/backends/xhr_backend');
var import21 = require('@angular/http/src/base_request_options');
var import22 = require('@angular/common/src/location/location');
var import23 = require('@angular/router/src/url_tree');
var import24 = require('@angular/router/src/router_outlet_map');
var import25 = require('@angular/core/src/linker/system_js_ng_module_factory_loader');
var import27 = require('./pages/landing/landing.ngfactory');
var import28 = require('./pages/constant-contact/constant-contact.ngfactory');
var import29 = require('./pages/camping/camping.ngfactory');
var import30 = require('./app.ngfactory');
var import31 = require('@angular/core/src/application_tokens');
var import32 = require('@angular/platform-browser/src/dom/events/dom_events');
var import33 = require('@angular/platform-browser/src/dom/events/key_events');
var import34 = require('@angular/core/src/zone/ng_zone');
var import35 = require('@angular/platform-browser/src/dom/debug/ng_probe');
var import36 = require('@angular/common/src/location/platform_location');
var import37 = require('@angular/common/src/location/location_strategy');
var import38 = require('./pages/landing/landing');
var import39 = require('./pages/constant-contact/constant-contact');
var import40 = require('./pages/camping/camping');
var import41 = require('@angular/router/src/router');
var import42 = require('@angular/core/src/console');
var import43 = require('@angular/core/src/i18n/tokens');
var import44 = require('@angular/core/src/error_handler');
var import45 = require('@angular/platform-browser/src/dom/dom_tokens');
var import46 = require('@angular/platform-browser/src/dom/animation_driver');
var import47 = require('@angular/core/src/render/api');
var import48 = require('@angular/core/src/security');
var import49 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import50 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import51 = require('@angular/http/src/interfaces');
var import52 = require('@angular/http/src/http');
var import53 = require('@angular/core/src/linker/ng_module_factory_loader');
var import54 = require('@angular/router/src/router_config_loader');
var import55 = require('@angular/router/src/router_state');
var import56 = require('@angular/core/src/i18n/tokens');
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import27.LandingNgFactory,
            import28.ConstantContactNgFactory,
            import29.CampingNgFactory,
            import27.LandingNgFactory,
            import27.LandingNgFactory,
            import30.AppNgFactory
        ], [import30.AppNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = null);
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new import11.Compiler());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = import31._appIdRandomProviderFactory());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = import4._document());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new import32.DomEventsPlugin(),
                    new import33.KeyEventsPlugin(),
                    new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import34.NgZone)));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = import35._createConditionalRootRenderer(this._DomRootRenderer_22, this.parent.get(import35.NgProbeToken, null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new import16.DomSanitizerImpl());
            }
            return this.__DomSanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_25", {
        get: function () {
            if ((this.__Sanitizer_25 == null)) {
                (this.__Sanitizer_25 = this._DomSanitizer_24);
            }
            return this.__Sanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_26", {
        get: function () {
            if ((this.__ViewUtils_26 == null)) {
                (this.__ViewUtils_26 = new import17.ViewUtils(this._RootRenderer_23, this._APP_ID_15, this._Sanitizer_25));
            }
            return this.__ViewUtils_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_27", {
        get: function () {
            if ((this.__IterableDiffers_27 == null)) {
                (this.__IterableDiffers_27 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_28", {
        get: function () {
            if ((this.__KeyValueDiffers_28 == null)) {
                (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_29", {
        get: function () {
            if ((this.__SharedStylesHost_29 == null)) {
                (this.__SharedStylesHost_29 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_30", {
        get: function () {
            if ((this.__BrowserXhr_30 == null)) {
                (this.__BrowserXhr_30 = new import18.BrowserXhr());
            }
            return this.__BrowserXhr_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_31", {
        get: function () {
            if ((this.__ResponseOptions_31 == null)) {
                (this.__ResponseOptions_31 = new import19.BaseResponseOptions());
            }
            return this.__ResponseOptions_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_32", {
        get: function () {
            if ((this.__XSRFStrategy_32 == null)) {
                (this.__XSRFStrategy_32 = import6._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_33", {
        get: function () {
            if ((this.__XHRBackend_33 == null)) {
                (this.__XHRBackend_33 = new import20.XHRBackend(this._BrowserXhr_30, this._ResponseOptions_31, this._XSRFStrategy_32));
            }
            return this.__XHRBackend_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_34", {
        get: function () {
            if ((this.__RequestOptions_34 == null)) {
                (this.__RequestOptions_34 = new import21.BaseRequestOptions());
            }
            return this.__RequestOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_35", {
        get: function () {
            if ((this.__Http_35 == null)) {
                (this.__Http_35 = import6.httpFactory(this._XHRBackend_33, this._RequestOptions_34));
            }
            return this.__Http_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_36", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_36 == null)) {
                (this.__ROUTER_CONFIGURATION_36 = { useHash: true });
            }
            return this.__ROUTER_CONFIGURATION_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_37", {
        get: function () {
            if ((this.__LocationStrategy_37 == null)) {
                (this.__LocationStrategy_37 = import5.provideLocationStrategy(this.parent.get(import36.PlatformLocation), this.parent.get(import37.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_36));
            }
            return this.__LocationStrategy_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_38", {
        get: function () {
            if ((this.__Location_38 == null)) {
                (this.__Location_38 = new import22.Location(this._LocationStrategy_37));
            }
            return this.__Location_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_39", {
        get: function () {
            if ((this.__UrlSerializer_39 == null)) {
                (this.__UrlSerializer_39 = new import23.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_40", {
        get: function () {
            if ((this.__RouterOutletMap_40 == null)) {
                (this.__RouterOutletMap_40 = new import24.RouterOutletMap());
            }
            return this.__RouterOutletMap_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_41", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_41 == null)) {
                (this.__NgModuleFactoryLoader_41 = new import25.SystemJsNgModuleLoader(this._Compiler_14, this.parent.get(import25.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_42", {
        get: function () {
            if ((this.__ROUTES_42 == null)) {
                (this.__ROUTES_42 = [[
                        {
                            path: 'landing',
                            component: import38.Landing
                        },
                        {
                            path: 'constant-contact',
                            component: import39.ConstantContact
                        },
                        {
                            path: 'camping',
                            component: import40.Camping
                        },
                        {
                            path: '**',
                            component: import38.Landing
                        },
                        {
                            path: '',
                            component: import38.Landing
                        }
                    ]
                ]);
            }
            return this.__ROUTES_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_43", {
        get: function () {
            if ((this.__Router_43 == null)) {
                (this.__Router_43 = import5.setupRouter(this._ApplicationRef_13, this._UrlSerializer_39, this._RouterOutletMap_40, this._Location_38, this, this._NgModuleFactoryLoader_41, this._Compiler_14, this._ROUTES_42, this._ROUTER_CONFIGURATION_36));
            }
            return this.__Router_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_44", {
        get: function () {
            if ((this.__ActivatedRoute_44 == null)) {
                (this.__ActivatedRoute_44 = import5.rootRoute(this._Router_43));
            }
            return this.__ActivatedRoute_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_45", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_45 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_45 = [import5.initialRouterNavigation(this._Router_43, this._ROUTER_CONFIGURATION_36)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TRANSLATIONS_FORMAT_46", {
        get: function () {
            if ((this.__TRANSLATIONS_FORMAT_46 == null)) {
                (this.__TRANSLATIONS_FORMAT_46 = null);
            }
            return this.__TRANSLATIONS_FORMAT_46;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import41.Router, null));
        this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
        this._HttpModule_5 = new import6.HttpModule();
        this._AppModule_6 = new import1.AppModule();
        this._ErrorHandler_9 = import4.errorHandler();
        this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER, null));
        this._Testability_11 = new import9.Testability(this.parent.get(import34.NgZone));
        this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import34.NgZone), this.parent.get(import42.Console), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(import9.TestabilityRegistry, null), this._Testability_11);
        return this._AppModule_6;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_3;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_4;
        }
        if ((token === import6.HttpModule)) {
            return this._HttpModule_5;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_6;
        }
        if ((token === import43.LOCALE_ID)) {
            return this._LOCALE_ID_7;
        }
        if ((token === import7.NgLocalization)) {
            return this._NgLocalization_8;
        }
        if ((token === import44.ErrorHandler)) {
            return this._ErrorHandler_9;
        }
        if ((token === import8.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === import9.Testability)) {
            return this._Testability_11;
        }
        if ((token === import10.ApplicationRef_)) {
            return this._ApplicationRef__12;
        }
        if ((token === import10.ApplicationRef)) {
            return this._ApplicationRef_13;
        }
        if ((token === import11.Compiler)) {
            return this._Compiler_14;
        }
        if ((token === import31.APP_ID)) {
            return this._APP_ID_15;
        }
        if ((token === import45.DOCUMENT)) {
            return this._DOCUMENT_16;
        }
        if ((token === import12.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === import13.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === import13.EventManager)) {
            return this._EventManager_19;
        }
        if ((token === import14.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === import46.AnimationDriver)) {
            return this._AnimationDriver_21;
        }
        if ((token === import15.DomRootRenderer)) {
            return this._DomRootRenderer_22;
        }
        if ((token === import47.RootRenderer)) {
            return this._RootRenderer_23;
        }
        if ((token === import16.DomSanitizer)) {
            return this._DomSanitizer_24;
        }
        if ((token === import48.Sanitizer)) {
            return this._Sanitizer_25;
        }
        if ((token === import17.ViewUtils)) {
            return this._ViewUtils_26;
        }
        if ((token === import49.IterableDiffers)) {
            return this._IterableDiffers_27;
        }
        if ((token === import50.KeyValueDiffers)) {
            return this._KeyValueDiffers_28;
        }
        if ((token === import14.SharedStylesHost)) {
            return this._SharedStylesHost_29;
        }
        if ((token === import18.BrowserXhr)) {
            return this._BrowserXhr_30;
        }
        if ((token === import19.ResponseOptions)) {
            return this._ResponseOptions_31;
        }
        if ((token === import51.XSRFStrategy)) {
            return this._XSRFStrategy_32;
        }
        if ((token === import20.XHRBackend)) {
            return this._XHRBackend_33;
        }
        if ((token === import21.RequestOptions)) {
            return this._RequestOptions_34;
        }
        if ((token === import52.Http)) {
            return this._Http_35;
        }
        if ((token === import5.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_36;
        }
        if ((token === import37.LocationStrategy)) {
            return this._LocationStrategy_37;
        }
        if ((token === import22.Location)) {
            return this._Location_38;
        }
        if ((token === import23.UrlSerializer)) {
            return this._UrlSerializer_39;
        }
        if ((token === import24.RouterOutletMap)) {
            return this._RouterOutletMap_40;
        }
        if ((token === import53.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_41;
        }
        if ((token === import54.ROUTES)) {
            return this._ROUTES_42;
        }
        if ((token === import41.Router)) {
            return this._Router_43;
        }
        if ((token === import55.ActivatedRoute)) {
            return this._ActivatedRoute_44;
        }
        if ((token === import31.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_45;
        }
        if ((token === import56.TRANSLATIONS_FORMAT)) {
            return this._TRANSLATIONS_FORMAT_46;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);