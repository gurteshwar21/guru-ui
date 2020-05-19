function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dashboard-dashboard-module */
        "dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (mod) {
          return mod.DashboardModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_ui_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/ui-config.service */
    "./src/app/services/ui-config.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/components/side-nav/side-nav.component */
    "./src/app/shared/components/side-nav/side-nav.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, uiConfigSvc) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.uiConfigSvc = uiConfigSvc;
        this.title = 'guru-ui';
        this.open = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.slideNavSubscription = this.uiConfigSvc.onSlideNavToggle.subscribe(function (result) {
            _this.open = result;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.slideNavSubscription) {
            this.slideNavSubscription.unsubscribe();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ui_config_service__WEBPACK_IMPORTED_MODULE_2__["UiConfigService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 1,
      consts: [["autosize", "", 1, "nav-container"], ["mode", "side", 3, "opened"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "guru-side-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.open);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".nav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.nav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n}\n.nav-container[_ngcontent-%COMP%]   .header-left-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RcXGd1cnUtdWkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXQtc2lkZW5hdntcclxuICAgICAgICB3aWR0aDogMjYwcHg7ICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWxlZnQtaWNvbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxufSIsIi5uYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5uYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuLm5hdi1jb250YWluZXIgLmhlYWRlci1sZWZ0LWljb24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_ui_config_service__WEBPACK_IMPORTED_MODULE_2__["UiConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_app_material_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/app-material-controls */
    "./src/app/shared/app-material-controls.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _shared_app_material_controls__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_CONTROLS"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _shared_app_material_controls__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_CONTROLS"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/ui-config.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/ui-config.service.ts ***!
    \***********************************************/

  /*! exports provided: UiConfigService */

  /***/
  function srcAppServicesUiConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiConfigService", function () {
      return UiConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UiConfigService = /*#__PURE__*/function () {
      function UiConfigService() {
        _classCallCheck(this, UiConfigService);

        this.onSlideNavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UiConfigService, [{
        key: "toggleSlideNav",
        value: function toggleSlideNav(open) {
          this.onSlideNavToggle.emit(open);
        }
      }]);

      return UiConfigService;
    }();

    UiConfigService.ɵfac = function UiConfigService_Factory(t) {
      return new (t || UiConfigService)();
    };

    UiConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UiConfigService,
      factory: UiConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/app-material-controls.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/app-material-controls.ts ***!
    \*************************************************/

  /*! exports provided: MATERIAL_CONTROLS */

  /***/
  function srcAppSharedAppMaterialControlsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MATERIAL_CONTROLS", function () {
      return MATERIAL_CONTROLS;
    });
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    var MATERIAL_CONTROLS = [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]];
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_ui_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/ui-config.service */
    "./src/app/services/ui-config.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return {
        "sidenav-opened": a0
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(uiConfigSvc) {
        _classCallCheck(this, HeaderComponent);

        this.uiConfigSvc = uiConfigSvc;
        this.openNav = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleSideNav",
        value: function toggleSideNav() {
          this.openNav = !this.openNav;
          this.uiConfigSvc.toggleSlideNav(this.openNav);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_config_service__WEBPACK_IMPORTED_MODULE_1__["UiConfigService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["guru-header"]],
      decls: 10,
      vars: 5,
      consts: [["color", "primary", "id", "shared-header", 1, "app-header", 3, "ngClass.xs"], [1, "mat-toolbar-row", "header-row"], [1, "header-left-icon"], [3, "click"], [1, "header-title"], [1, "header-right-icons", 3, "ngClass.gt-sm"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_mat_icon_click_3_listener() {
            return ctx.toggleSideNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "header-mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toolbarTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.openNav));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["@font-face {\n  font-family: BogleRegular;\n  src: url(\"/assets/fonts/Bogle-Regular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlack;\n  src: url(\"/assets/fonts/Bogle-Black.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBold;\n  src: url(\"/assets/fonts/Bogle-Bold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegularItalic;\n  src: url(\"/assets/fonts/Bogle-RegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlackItalic;\n  src: url(\"/assets/fonts/Bogle-BlackItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBoldItalic;\n  src: url(\"/assets/fonts/Bogle-BoldItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegular;\n  src: url(\"/assets/fonts/Bogle-Regular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlack;\n  src: url(\"/assets/fonts/Bogle-Black.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBold;\n  src: url(\"/assets/fonts/Bogle-Bold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegularItalic;\n  src: url(\"/assets/fonts/Bogle-RegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlackItalic;\n  src: url(\"/assets/fonts/Bogle-BlackItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBoldItalic;\n  src: url(\"/assets/fonts/Bogle-BoldItalic.otf\") format(\"opentype\");\n}\n.app-header[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 0;\n  position: fixed;\n  z-index: 1000;\n}\n.app-header[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  height: 56px;\n}\n.app-header.header-mobile[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.app-header.collapsed-header[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 2px 0px rgba(0, 0, 0, 0.12), 0px 1px 3px 0px rgba(0, 0, 0, 0.2);\n}\n.app-header[_ngcontent-%COMP%]   .header-left-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n}\n.app-header[_ngcontent-%COMP%]   .header-right-icons[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  transition-duration: 0.4s;\n  transition-property: margin-right;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.app-header[_ngcontent-%COMP%]   .header-right-icons.sidenav-opened[_ngcontent-%COMP%] {\n  margin-right: 256px;\n}\n.app-header[_ngcontent-%COMP%]   .header-right-icons[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0 5px;\n}\n.app-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-family: BogleRegular;\n  font-size: 20px;\n  height: 24px;\n  letter-spacing: 0.25px;\n  line-height: 24px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1 1 auto;\n}\n.sub-header[_ngcontent-%COMP%] {\n  background-color: #081f2c;\n}\n.sub-header[_ngcontent-%COMP%]   .sub-header-content[_ngcontent-%COMP%] {\n  height: 30vh;\n  max-height: 50vh;\n  padding-top: 64px;\n  transition: max-height 0.2s ease;\n}\n.sub-header[_ngcontent-%COMP%]   .sub-header-content.header-desktop[_ngcontent-%COMP%] {\n  background-color: #081f2c;\n}\n.sub-header[_ngcontent-%COMP%]   .sub-header-content.collapsed-header[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  max-height: 64px !important;\n  overflow: hidden;\n  padding: 0;\n}\n.sub-header[_ngcontent-%COMP%]   .sub-header-content.collapsed-header.show-progress-bar[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.sub-header[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0 16px;\n}\n.sub-header[_ngcontent-%COMP%]   .title-container.title-desktop[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.sub-header[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: BogleRegular;\n  font-size: 34px;\n  height: 40px;\n  letter-spacing: 0.25px;\n  line-height: 40px;\n  height: auto;\n}\n.sub-header[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-family: BogleRegular;\n  font-size: 16px;\n  height: 28px;\n  letter-spacing: 0.5px;\n  line-height: 28px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0U6XFxQcm9qZWN0XFxndXJ1LXVpL3NyY1xcc3R5bGVzXFxmb250cy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvRTpcXFByb2plY3RcXGd1cnUtdWkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9FOlxcUHJvamVjdFxcZ3VydS11aS9zcmNcXHN0eWxlc1xcc2hhZG93cy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvRTpcXFByb2plY3RcXGd1cnUtdWkvc3JjXFxzdHlsZXNcXHR5cG9ncmFwaHkuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0U6XFxQcm9qZWN0XFxndXJ1LXVpL3NyY1xcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsOERBQUE7QUNBRjtBREdBO0VBQ0UsdUJBQUE7RUFDQSw0REFBQTtBQ0RGO0FESUE7RUFDRSxzQkFBQTtFQUNBLDJEQUFBO0FDRkY7QURLQTtFQUNFLCtCQUFBO0VBQ0Esb0VBQUE7QUNIRjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSxrRUFBQTtBQ0pGO0FET0E7RUFDRSw0QkFBQTtFQUNBLGlFQUFBO0FDTEY7QUR0QkE7RUFDRSx5QkFBQTtFQUNBLDhEQUFBO0FDd0JGO0FEckJBO0VBQ0UsdUJBQUE7RUFDQSw0REFBQTtBQ3VCRjtBRHBCQTtFQUNFLHNCQUFBO0VBQ0EsMkRBQUE7QUNzQkY7QURuQkE7RUFDRSwrQkFBQTtFQUNBLG9FQUFBO0FDcUJGO0FEbEJBO0VBQ0UsNkJBQUE7RUFDQSxrRUFBQTtBQ29CRjtBRGpCQTtFQUNFLDRCQUFBO0VBQ0EsaUVBQUE7QUNtQkY7QUM3Q0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FEK0NGO0FDN0NFO0VBQ0UsWUFBQTtBRCtDSjtBQzVDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRDhDSjtBQzNDRTtFQ2ZBLHdIQUFBO0FGNkRGO0FDMUNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FENENKO0FDekNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDREQUFBO0FEMkNKO0FDcENJO0VBQ0UsbUJBQUE7QURzQ047QUNuQ0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBRHFDTjtBQ2pDRTtFRUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBMkRBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRi9ERSxjQUFBO0FEeUNKO0FDckNBO0VBQ0UseUJHdERRO0FKOEZWO0FDdENFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBRHdDSjtBQ3RDSTtFQUNFLHlCRy9ESTtBSnVHVjtBQ3JDSTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUR1Q047QUNwQ0k7RUFDRSxjQUFBO0FEc0NOO0FDbENFO0VBQ0UsV0d6REk7RUgwREosZUFBQTtBRG9DSjtBQ2xDSTtFQUNFLGFBQUE7QURvQ047QUNqQ0k7RUV0REYseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUZvREksWUFBQTtBRHVDTjtBQ3BDSTtFRXBDRix5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQzdCQSxZQUFBO0FKeUdGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJPR0xFXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJsYWNrO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJsYWNrLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZDtcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Cb2dsZS1Cb2xkLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhckl0YWxpYztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Cb2dsZS1SZWd1bGFySXRhbGljLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2tJdGFsaWM7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvQm9nbGUtQmxhY2tJdGFsaWMub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogQm9nbGVCb2xkSXRhbGljO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGRJdGFsaWMub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhci5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2s7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1CbGFjay5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZDtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGQub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXJJdGFsaWM7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1SZWd1bGFySXRhbGljLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVCbGFja0l0YWxpYztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJsYWNrSXRhbGljLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVCb2xkSXRhbGljO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtQm9sZEl0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLVJlZ3VsYXIub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJsYWNrO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtQmxhY2sub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJvbGQ7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1Cb2xkLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFySXRhbGljO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhckl0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2tJdGFsaWM7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1CbGFja0l0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZEl0YWxpYztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGRJdGFsaWMub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLmFwcC1oZWFkZXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5hcHAtaGVhZGVyIC5oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLmFwcC1oZWFkZXIuaGVhZGVyLW1vYmlsZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5hcHAtaGVhZGVyLmNvbGxhcHNlZC1oZWFkZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uYXBwLWhlYWRlciAuaGVhZGVyLWxlZnQtaWNvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmFwcC1oZWFkZXIgLmhlYWRlci1yaWdodC1pY29ucyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbi1yaWdodDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuLmFwcC1oZWFkZXIgLmhlYWRlci1yaWdodC1pY29ucy5zaWRlbmF2LW9wZW5lZCB7XG4gIG1hcmdpbi1yaWdodDogMjU2cHg7XG59XG4uYXBwLWhlYWRlciAuaGVhZGVyLXJpZ2h0LWljb25zIC5tYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5hcHAtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjO1xufVxuLnN1Yi1oZWFkZXIgLnN1Yi1oZWFkZXItY29udGVudCB7XG4gIGhlaWdodDogMzB2aDtcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgcGFkZGluZy10b3A6IDY0cHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlO1xufVxuLnN1Yi1oZWFkZXIgLnN1Yi1oZWFkZXItY29udGVudC5oZWFkZXItZGVza3RvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODFmMmM7XG59XG4uc3ViLWhlYWRlciAuc3ViLWhlYWRlci1jb250ZW50LmNvbGxhcHNlZC1oZWFkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG59XG4uc3ViLWhlYWRlciAuc3ViLWhlYWRlci1jb250ZW50LmNvbGxhcHNlZC1oZWFkZXIuc2hvdy1wcm9ncmVzcy1iYXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zdWItaGVhZGVyIC50aXRsZS1jb250YWluZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnN1Yi1oZWFkZXIgLnRpdGxlLWNvbnRhaW5lci50aXRsZS1kZXNrdG9wIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5zdWItaGVhZGVyIC50aXRsZS1jb250YWluZXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc3ViLWhlYWRlciAudGl0bGUtY29udGFpbmVyIC5zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBvcGFjaXR5OiAwLjc7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgLmhlYWRlci1yb3cge1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gIH1cclxuXHJcbiAgJi5oZWFkZXItbW9iaWxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAmLmNvbGxhcHNlZC1oZWFkZXIge1xyXG4gICAgQGluY2x1ZGUgc2hhZG93LTE7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWxlZnQtaWNvbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItcmlnaHQtaWNvbnMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLXJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcihcclxuICAgICAgMC4yNSxcclxuICAgICAgMC44LFxyXG4gICAgICAwLjI1LFxyXG4gICAgICAxXHJcbiAgICApOyAvLyBzYXNzLWxpbnQ6ZGlzYWJsZS1saW5lIGxlYWRpbmctemVyb1xyXG5cclxuICAgICYuc2lkZW5hdi1vcGVuZWQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1NnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgaGVhZGxpbmUtNjtcclxuICAgIEBpbmNsdWRlIHRydW5jYXRlLWVsbGlwc2lzO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uc3ViLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4gIC5zdWItaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2U7IC8vc2Fzcy1saW50OmRpc2FibGUtbGluZSBsZWFkaW5nLXplcm9cclxuXHJcbiAgICAmLmhlYWRlci1kZXNrdG9wIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jb2xsYXBzZWQtaGVhZGVyIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgbWF4LWhlaWdodDogNjRweCAhaW1wb3J0YW50OyAvLyBzYXNzLWxpbnQ6ZGlzYWJsZS1saW5lIG5vLWltcG9ydGFudFxyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYuY29sbGFwc2VkLWhlYWRlci5zaG93LXByb2dyZXNzLWJhciB7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICAgICYudGl0bGUtZGVza3RvcCB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgQGluY2x1ZGUgaGVhZGxpbmUtNDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIEBpbmNsdWRlIGJvZHktMTtcclxuICAgICAgQGluY2x1ZGUgb3BhY2l0eS03MDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyBCT1ggU0hBRE9XU1xyXG5AbWl4aW4gc2hhZG93LTEge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3ctMiB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvdy0zIHtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvdy00IHtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvdy02IHtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3ctOCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMHB4IDNweCAxNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gc2hhZG93LTkge1xyXG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3ctMTIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gc2hhZG93LTE2IHtcclxuICBib3gtc2hhZG93OiAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggOHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvdy0yNCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDExcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vLyBDT1JORVIgUkFESVVTXHJcbkBtaXhpbiBjb3JuZXItcmFkaXVzLTQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuQG1peGluIGNvcm5lci1yYWRpdXMtOCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5AbWl4aW4gY29ybmVyLXJhZGl1cy0yNCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxufVxyXG5cclxuQG1peGluIHJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIiwiQGltcG9ydCAnZm9udHMnO1xyXG5cclxuQG1peGluIG92ZXJsaW5lIHtcclxuICBmb250LWZhbWlseTogQm9nbGVCb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5AbWl4aW4gaGVhZGxpbmUtMSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDk2cHg7XHJcbiAgaGVpZ2h0OiAxMTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTEuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMTJweDtcclxufVxyXG5cclxuQG1peGluIGhlYWRsaW5lLTIge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5AbWl4aW4gaGVhZGxpbmUtMyB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG5AbWl4aW4gaGVhZGxpbmUtNCB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkbGluZS01IHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkbGluZS02IHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuQG1peGluIGJvZHktMSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuQG1peGluIGJvZHktMiB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuQG1peGluIHN1YnRpdGxlLTEge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5AbWl4aW4gc3VidGl0bGUtMiB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuQG1peGluIGNhcHRpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbkBtaXhpbiB1bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUtZWxsaXBzaXMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4iLCJAaW1wb3J0ICdwYWxldHRlJztcclxuXHJcbi8vIFBSSU1BUlkgQ09MT1JTXHJcbiRwcmltYXJ5LWxpZ2h0OiBtYXAtZ2V0KCR3YWxtYXJ0LWxpZ2h0LWJsdWUsIDUwMCk7XHJcbiRwcmltYXJ5OiBtYXAtZ2V0KCR3YWxtYXJ0LWludGVybmF0aW9uYWwtZGFyay1uYXZ5LCA1MDApO1xyXG4kbWFpbi10ZXh0OiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG5cclxuLy8gU0VDT05EQVJZIENPTE9SU1xyXG4kYWNjZW50OiBtYXAtZ2V0KCR3YWxtYXJ0LXllbGxvdywgNTAwKTtcclxuJGFjY2VudDI6IG1hcC1nZXQoJHdhbG1hcnQtZnJlc2gtZ3JlZW4sIDUwMCk7XHJcbiR3YXJuOiBtYXAtZ2V0KCR3YWxtYXJ0LXJlZCwgNTAwKTtcclxuJG1lZGl1bTogIzAwNzFjZTtcclxuJGxpZ2h0OiAjZTFlZGY5O1xyXG4kc3lzdGVtOiBtYXAtZ2V0KCR3YWxtYXJ0LXllbGxvdywgNDAwKTtcclxuJHBpbms6ICNlYjE0OGQ7XHJcbiRvcmFuZ2U6ICNmNDc1MjE7XHJcbiRuZXctYmx1ZTogIzRjOTRjMDtcclxuXHJcbi8vIEFDQ0VTU0JJTElUWSBDT0xPUlNcclxuJG11dGVkLWJsYWNrOiAjM2YzZjQwO1xyXG4kbXV0ZWQtZ3JleTogI2NjYztcclxuJG11dGVkLW1lZGl1bS1ibHVlOiAjNDQ4OWI1O1xyXG4kbXV0ZWQtZGFyay1ibHVlOiAjMDcxNDFkO1xyXG5cclxuLy8gU1RBTkRBUkQgU0hBREVTXHJcbiRibGFjazogbWFwLWdldCgkYmxhY2ssIDUwMCk7XHJcbiR3aGl0ZTogbWFwLWdldCgkd2hpdGUsIDUwMCk7XHJcbiRncmV5OiAjZjlmYWZiO1xyXG5cclxuLy8gVFJBTlNQQVJFTkNZXHJcbkBtaXhpbiBvcGFjaXR5LTg3IHtcclxuICBvcGFjaXR5OiAwLjg3O1xyXG59XHJcbkBtaXhpbiBvcGFjaXR5LTcwIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuQG1peGluIG9wYWNpdHktNjAge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5AbWl4aW4gb3BhY2l0eS01NCB7XHJcbiAgb3BhY2l0eTogMC41NDtcclxufVxyXG5AbWl4aW4gb3BhY2l0eS0zOCB7XHJcbiAgb3BhY2l0eTogMC4zODtcclxufVxyXG5AbWl4aW4gb3BhY2l0eS0xOCB7XHJcbiAgb3BhY2l0eTogMC4xODtcclxufVxyXG5AbWl4aW4gb3BhY2l0eS0xMiB7XHJcbiAgb3BhY2l0eTogMC4xMjtcclxufVxyXG5AbWl4aW4gb3BhY2l0eS02IHtcclxuICBvcGFjaXR5OiAwLjA2O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'guru-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_ui_config_service__WEBPACK_IMPORTED_MODULE_1__["UiConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/side-nav/side-nav.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/side-nav/side-nav.component.ts ***!
    \******************************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppSharedComponentsSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var SideNavComponent = /*#__PURE__*/function () {
      function SideNavComponent(router) {
        _classCallCheck(this, SideNavComponent);

        this.router = router;
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToDashboard",
        value: function goToDashboard() {
          this.router.navigate(['/dashboard']);
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
      return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideNavComponent,
      selectors: [["guru-side-nav"]],
      decls: 13,
      vars: 0,
      consts: [[1, "sidenav-container"], [1, "sidenav-brand"], [1, "catalog-row", 3, "click"], [1, "sidenav-icon"], [1, "sidenav-label"], [1, "catalog-row"]],
      template: function SideNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Guru ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_div_click_3_listener() {
            return ctx.goToDashboard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "view_list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Templates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: ["@font-face {\n  font-family: BogleRegular;\n  src: url(\"/assets/fonts/Bogle-Regular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlack;\n  src: url(\"/assets/fonts/Bogle-Black.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBold;\n  src: url(\"/assets/fonts/Bogle-Bold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegularItalic;\n  src: url(\"/assets/fonts/Bogle-RegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlackItalic;\n  src: url(\"/assets/fonts/Bogle-BlackItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBoldItalic;\n  src: url(\"/assets/fonts/Bogle-BoldItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegular;\n  src: url(\"/assets/fonts/Bogle-Regular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlack;\n  src: url(\"/assets/fonts/Bogle-Black.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBold;\n  src: url(\"/assets/fonts/Bogle-Bold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegularItalic;\n  src: url(\"/assets/fonts/Bogle-RegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlackItalic;\n  src: url(\"/assets/fonts/Bogle-BlackItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBoldItalic;\n  src: url(\"/assets/fonts/Bogle-BoldItalic.otf\") format(\"opentype\");\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n  width: 257px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-brand[_ngcontent-%COMP%] {\n  font-family: BogleRegular;\n  font-size: 20px;\n  height: 24px;\n  letter-spacing: 0.25px;\n  line-height: 24px;\n  align-items: center;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 92px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-label[_ngcontent-%COMP%] {\n  font-family: BogleRegular;\n  font-size: 16px;\n  height: 28px;\n  letter-spacing: 0.5px;\n  line-height: 28px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  align-items: center;\n  cursor: pointer;\n  display: inline;\n  margin-left: 24px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .catalog-row[_ngcontent-%COMP%] {\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  display: flex;\n  height: 64px;\n  margin-bottom: 16px;\n  padding: 0 16px 15px 16px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .app-version[_ngcontent-%COMP%] {\n  font-family: BogleBold;\n  font-size: 12px;\n  font-weight: bold;\n  height: 16px;\n  letter-spacing: 2px;\n  line-height: 16px;\n  text-transform: uppercase;\n  bottom: 16px;\n  color: #081f2c;\n  position: absolute;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXYvRTpcXFByb2plY3RcXGd1cnUtdWkvc3JjXFxzdHlsZXNcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlLW5hdi9FOlxcUHJvamVjdFxcZ3VydS11aS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzaWRlLW5hdlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGUtbmF2L0U6XFxQcm9qZWN0XFxndXJ1LXVpL3NyY1xcc3R5bGVzXFx0eXBvZ3JhcGh5LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGUtbmF2L0U6XFxQcm9qZWN0XFxndXJ1LXVpL3NyY1xcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsOERBQUE7QUNBRjtBREdBO0VBQ0UsdUJBQUE7RUFDQSw0REFBQTtBQ0RGO0FESUE7RUFDRSxzQkFBQTtFQUNBLDJEQUFBO0FDRkY7QURLQTtFQUNFLCtCQUFBO0VBQ0Esb0VBQUE7QUNIRjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSxrRUFBQTtBQ0pGO0FET0E7RUFDRSw0QkFBQTtFQUNBLGlFQUFBO0FDTEY7QUR0QkE7RUFDRSx5QkFBQTtFQUNBLDhEQUFBO0FDd0JGO0FEckJBO0VBQ0UsdUJBQUE7RUFDQSw0REFBQTtBQ3VCRjtBRHBCQTtFQUNFLHNCQUFBO0VBQ0EsMkRBQUE7QUNzQkY7QURuQkE7RUFDRSwrQkFBQTtFQUNBLG9FQUFBO0FDcUJGO0FEbEJBO0VBQ0UsNkJBQUE7RUFDQSxrRUFBQTtBQ29CRjtBRGpCQTtFQUNFLDRCQUFBO0VBQ0EsaUVBQUE7QUNtQkY7QUM3Q0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEK0NGO0FDN0NFO0VBQ0UsMEJBQUE7QUQrQ0o7QUM1Q0U7RUN3Q0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUQxQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBRGtESjtBQ2hESTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FEa0ROO0FDOUNFO0VDa0NBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBbURBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFRHhGRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURzREo7QUNuREU7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURxREo7QUNqREU7RUMxQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VEc0NFLFlBQUE7RUFDQSxjRTVDTTtFRjZDTixrQkFBQTtFQUNBLFdBQUE7QUR5REoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJPR0xFXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJsYWNrO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJsYWNrLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZDtcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Cb2dsZS1Cb2xkLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhckl0YWxpYztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Cb2dsZS1SZWd1bGFySXRhbGljLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2tJdGFsaWM7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvQm9nbGUtQmxhY2tJdGFsaWMub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogQm9nbGVCb2xkSXRhbGljO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGRJdGFsaWMub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhci5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2s7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1CbGFjay5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZDtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGQub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXJJdGFsaWM7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1SZWd1bGFySXRhbGljLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVCbGFja0l0YWxpYztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJsYWNrSXRhbGljLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVCb2xkSXRhbGljO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtQm9sZEl0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLVJlZ3VsYXIub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJsYWNrO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtQmxhY2sub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJvbGQ7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1Cb2xkLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFySXRhbGljO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhckl0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2tJdGFsaWM7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1CbGFja0l0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZEl0YWxpYztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGRJdGFsaWMub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjU3cHg7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWJyYW5kIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDkycHg7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtbGFiZWwge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciAuY2F0YWxvZy1yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiAwIDE2cHggMTVweCAxNnB4O1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5hcHAtdmVyc2lvbiB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvdHRvbTogMTZweDtcbiAgY29sb3I6ICMwODFmMmM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI1N3B4O1xyXG5cclxuICAuc2lkZW5hdi1pY29uIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYtYnJhbmQge1xyXG4gICAgQGluY2x1ZGUgaGVhZGxpbmUtNjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDkycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdi1sYWJlbCB7XHJcbiAgICBAaW5jbHVkZSBib2R5LTE7XHJcbiAgICBAaW5jbHVkZSB0cnVuY2F0ZS1lbGxpcHNpcztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICB9XHJcblxyXG4gIC5jYXRhbG9nLXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggMTVweCAxNnB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5hcHAtdmVyc2lvbiB7XHJcbiAgICBAaW5jbHVkZSBvdmVybGluZTtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdmb250cyc7XHJcblxyXG5AbWl4aW4gb3ZlcmxpbmUge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkbGluZS0xIHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogOTZweDtcclxuICBoZWlnaHQ6IDExMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMS41cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDExMnB4O1xyXG59XHJcblxyXG5AbWl4aW4gaGVhZGxpbmUtMiB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkbGluZS0zIHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkbGluZS00IHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuQG1peGluIGhlYWRsaW5lLTUge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuQG1peGluIGhlYWRsaW5lLTYge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYm9keS0xIHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYm9keS0yIHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gc3VidGl0bGUtMSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBzdWJ0aXRsZS0yIHtcclxuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogQm9nbGVCb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5AbWl4aW4gY2FwdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxufVxyXG5cclxuQG1peGluIHVuZGVybGluZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbkBtaXhpbiB0cnVuY2F0ZS1lbGxpcHNpcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiIsIkBpbXBvcnQgJ3BhbGV0dGUnO1xyXG5cclxuLy8gUFJJTUFSWSBDT0xPUlNcclxuJHByaW1hcnktbGlnaHQ6IG1hcC1nZXQoJHdhbG1hcnQtbGlnaHQtYmx1ZSwgNTAwKTtcclxuJHByaW1hcnk6IG1hcC1nZXQoJHdhbG1hcnQtaW50ZXJuYXRpb25hbC1kYXJrLW5hdnksIDUwMCk7XHJcbiRtYWluLXRleHQ6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcblxyXG4vLyBTRUNPTkRBUlkgQ09MT1JTXHJcbiRhY2NlbnQ6IG1hcC1nZXQoJHdhbG1hcnQteWVsbG93LCA1MDApO1xyXG4kYWNjZW50MjogbWFwLWdldCgkd2FsbWFydC1mcmVzaC1ncmVlbiwgNTAwKTtcclxuJHdhcm46IG1hcC1nZXQoJHdhbG1hcnQtcmVkLCA1MDApO1xyXG4kbWVkaXVtOiAjMDA3MWNlO1xyXG4kbGlnaHQ6ICNlMWVkZjk7XHJcbiRzeXN0ZW06IG1hcC1nZXQoJHdhbG1hcnQteWVsbG93LCA0MDApO1xyXG4kcGluazogI2ViMTQ4ZDtcclxuJG9yYW5nZTogI2Y0NzUyMTtcclxuJG5ldy1ibHVlOiAjNGM5NGMwO1xyXG5cclxuLy8gQUNDRVNTQklMSVRZIENPTE9SU1xyXG4kbXV0ZWQtYmxhY2s6ICMzZjNmNDA7XHJcbiRtdXRlZC1ncmV5OiAjY2NjO1xyXG4kbXV0ZWQtbWVkaXVtLWJsdWU6ICM0NDg5YjU7XHJcbiRtdXRlZC1kYXJrLWJsdWU6ICMwNzE0MWQ7XHJcblxyXG4vLyBTVEFOREFSRCBTSEFERVNcclxuJGJsYWNrOiBtYXAtZ2V0KCRibGFjaywgNTAwKTtcclxuJHdoaXRlOiBtYXAtZ2V0KCR3aGl0ZSwgNTAwKTtcclxuJGdyZXk6ICNmOWZhZmI7XHJcblxyXG4vLyBUUkFOU1BBUkVOQ1lcclxuQG1peGluIG9wYWNpdHktODcge1xyXG4gIG9wYWNpdHk6IDAuODc7XHJcbn1cclxuQG1peGluIG9wYWNpdHktNzAge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5AbWl4aW4gb3BhY2l0eS02MCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcbkBtaXhpbiBvcGFjaXR5LTU0IHtcclxuICBvcGFjaXR5OiAwLjU0O1xyXG59XHJcbkBtaXhpbiBvcGFjaXR5LTM4IHtcclxuICBvcGFjaXR5OiAwLjM4O1xyXG59XHJcbkBtaXhpbiBvcGFjaXR5LTE4IHtcclxuICBvcGFjaXR5OiAwLjE4O1xyXG59XHJcbkBtaXhpbiBvcGFjaXR5LTEyIHtcclxuICBvcGFjaXR5OiAwLjEyO1xyXG59XHJcbkBtaXhpbiBvcGFjaXR5LTYge1xyXG4gIG9wYWNpdHk6IDAuMDY7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'guru-side-nav',
          templateUrl: './side-nav.component.html',
          styleUrls: ['./side-nav.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_material_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-material-controls */
    "./src/app/shared/app-material-controls.ts");
    /* harmony import */


    var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/side-nav/side-nav.component */
    "./src/app/shared/components/side-nav/side-nav.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_material_controls__WEBPACK_IMPORTED_MODULE_2__["MATERIAL_CONTROLS"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]],
        exports: [_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
          exports: [_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_material_controls__WEBPACK_IMPORTED_MODULE_2__["MATERIAL_CONTROLS"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Project\guru-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map