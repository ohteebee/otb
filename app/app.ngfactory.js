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
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('./app');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/router/src/router');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var import11 = require('@angular/router/src/directives/router_link');
var import12 = require('@angular/router/src/directives/router_outlet');
var import13 = require('@angular/router/src/router_state');
var import14 = require('@angular/common/src/location/location_strategy');
var import15 = require('@angular/router/src/router_outlet_map');
var import16 = require('@angular/core/src/linker/component_factory_resolver');
var import17 = require('@angular/core/src/security');
var renderType_App_Host = null;
var _View_App_Host0 = (function (_super) {
    __extends(_View_App_Host0, _super);
    function _View_App_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_App_Host0, renderType_App_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_App_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_App0(this.viewUtils, this.injector(0), this._appEl_0);
        this._App_0_4 = new import3.App(this.parentInjector.get(import8.Router));
        this._appEl_0.initComponent(this._App_0_4, [], compView_0);
        compView_0.create(this._App_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_App_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.App) && (0 === requestNodeIndex))) {
            return this._App_0_4;
        }
        return notFoundResult;
    };
    return _View_App_Host0;
}(import1.AppView));
function viewFactory_App_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_App_Host === null)) {
        (renderType_App_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_App_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AppNgFactory = new import10.ComponentFactory('my-app', viewFactory_App_Host0, import3.App);
var styles_App = [];
var renderType_App = null;
var _View_App0 = (function (_super) {
    __extends(_View_App0, _super);
    function _View_App0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_App0, renderType_App, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_App0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'header', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'hand hidden-sm-down');
        this.renderer.setElementAttribute(this._el_0, 'id', 'landing-header');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'a', null);
        this.renderer.setElementAttribute(this._el_2, 'href', '#');
        this.renderer.setElementAttribute(this._el_2, 'routerLink', '/');
        this._RouterLinkWithHref_2_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import8.Router), this.parentInjector.get(import13.ActivatedRoute), this.parentInjector.get(import14.LocationStrategy));
        this._el_3 = this.renderer.createElement(this._el_2, 'img', null);
        this.renderer.setElementAttribute(this._el_3, 'src', 'otb-logo.png');
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'h5', null);
        this.renderer.setElementAttribute(this._el_5, 'id', 'phrase');
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'header', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'hand hidden-md-up');
        this.renderer.setElementAttribute(this._el_9, 'id', 'landing-header-mobile');
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_12 = this.renderer.createElement(this._el_9, 'a', null);
        this.renderer.setElementAttribute(this._el_12, 'href', '#');
        this._el_13 = this.renderer.createElement(this._el_12, 'img', null);
        this.renderer.setElementAttribute(this._el_13, 'src', 'otb-logo.png');
        this._text_14 = this.renderer.createText(this._el_9, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_16 = this.renderer.createElement(parentRenderNode, 'router-outlet', null);
        this._appEl_16 = new import2.AppElement(16, null, this, this._el_16);
        this._RouterOutlet_16_5 = new import12.RouterOutlet(this.parentInjector.get(import15.RouterOutletMap), this._appEl_16.vcRef, this.parentInjector.get(import16.ComponentFactoryResolver), null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_18 = this.renderer.createElement(parentRenderNode, 'footer', null);
        this.renderer.setElementAttribute(this._el_18, 'id', 'copyright');
        this.renderer.setElementAttribute(this._el_18, 'style', 'text-align:center');
        this._text_19 = this.renderer.createText(this._el_18, '\n    ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'p', null);
        this.renderer.setElementAttribute(this._el_20, 'style', 'text-align: center !important');
        this._text_21 = this.renderer.createText(this._el_20, '©2016 OTB. All rights reserved.', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n    ', null);
        this._el_23 = this.renderer.createElement(this._el_18, 'p', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'center');
        this._text_24 = this.renderer.createText(this._el_23, '\n        OTB\n        ', null);
        this._el_25 = this.renderer.createElement(this._el_23, 'br', null);
        this._text_26 = this.renderer.createText(this._el_23, '\n        HQ in Greenville, SC\n        ', null);
        this._el_27 = this.renderer.createElement(this._el_23, 'br', null);
        this._text_28 = this.renderer.createText(this._el_23, '\n        (970)372-9900\n        ', null);
        this._el_29 = this.renderer.createElement(this._el_23, 'br', null);
        this._text_30 = this.renderer.createText(this._el_23, '\n        jonathan@otb.zone\n        ', null);
        this._el_31 = this.renderer.createElement(this._el_23, 'br', null);
        this._text_32 = this.renderer.createText(this._el_23, '\n        brett@otb.zone\n    ', null);
        this._text_33 = this.renderer.createText(this._el_18, '\n', null);
        this._text_34 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_App0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3;
        }
        if (((token === import12.RouterOutlet) && (16 === requestNodeIndex))) {
            return this._RouterOutlet_16_5;
        }
        return notFoundResult;
    };
    _View_App0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_2 = '/';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_2_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_2_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = this._RouterLinkWithHref_2_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_2, 'href', this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.phrase, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_6, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_App0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
        this._RouterOutlet_16_5.ngOnDestroy();
    };
    _View_App0.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.change() !== false);
        return (true && pd_0);
    };
    _View_App0.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_2_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_App0.prototype._handle_click_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.change() !== false);
        return (true && pd_0);
    };
    return _View_App0;
}(import1.AppView));
function viewFactory_App0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_App === null)) {
        (renderType_App = viewUtils.createRenderComponentType('/Users/oliviatrimble/Workspaces/otb/web/app/app.html', 0, import9.ViewEncapsulation.None, styles_App, {}));
    }
    return new _View_App0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_App0 = viewFactory_App0;
