(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/components/file-upload/file-upload.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/file-upload/file-upload.component.ts ***!
  \***************************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



class FileUploadComponent {
    constructor() { }
    ngOnInit() {
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(); };
FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["guru-file-upload"]], decls: 4, vars: 0, consts: [[1, "file-upload-container"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Browse files or drop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".file-upload-container[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvRTpcXFByb2plY3RcXGd1cnUtdWkvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcZmlsZS11cGxvYWRcXGZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLXVwbG9hZC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59IiwiLmZpbGUtdXBsb2FkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'guru-file-upload',
                templateUrl: './file-upload.component.html',
                styleUrls: ['./file-upload.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/main/main.component */ "./src/app/dashboard/page/main/main.component.ts");





const routes = [
    {
        path: '',
        component: _page_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/main/main.component */ "./src/app/dashboard/page/main/main.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/file-upload/file-upload.component */ "./src/app/dashboard/components/file-upload/file-upload.component.ts");
/* harmony import */ var _shared_app_material_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/app-material-controls */ "./src/app/shared/app-material-controls.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

















class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            _shared_app_material_controls__WEBPACK_IMPORTED_MODULE_5__["MATERIAL_CONTROLS"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_page_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"]],
                entryComponents: [_page_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                    _shared_app_material_controls__WEBPACK_IMPORTED_MODULE_5__["MATERIAL_CONTROLS"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/page/main/main.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/page/main/main.component.ts ***!
  \*******************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/file-upload/file-upload.component */ "./src/app/dashboard/components/file-upload/file-upload.component.ts");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["guru-dashboard-main"]], decls: 4, vars: 0, consts: [[1, "main"], [1, "content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "guru-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "guru-file-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["FileUploadComponent"]], styles: ["@font-face {\n  font-family: BogleRegular;\n  src: url(\"/assets/fonts/Bogle-Regular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlack;\n  src: url(\"/assets/fonts/Bogle-Black.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBold;\n  src: url(\"/assets/fonts/Bogle-Bold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegularItalic;\n  src: url(\"/assets/fonts/Bogle-RegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlackItalic;\n  src: url(\"/assets/fonts/Bogle-BlackItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBoldItalic;\n  src: url(\"/assets/fonts/Bogle-BoldItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegular;\n  src: url(\"/assets/fonts/Bogle-Regular.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlack;\n  src: url(\"/assets/fonts/Bogle-Black.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBold;\n  src: url(\"/assets/fonts/Bogle-Bold.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleRegularItalic;\n  src: url(\"/assets/fonts/Bogle-RegularItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBlackItalic;\n  src: url(\"/assets/fonts/Bogle-BlackItalic.otf\") format(\"opentype\");\n}\n@font-face {\n  font-family: BogleBoldItalic;\n  src: url(\"/assets/fonts/Bogle-BoldItalic.otf\") format(\"opentype\");\n}\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BhZ2UvbWFpbi9FOlxcUHJvamVjdFxcZ3VydS11aS9zcmNcXHN0eWxlc1xcZm9udHMuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL3BhZ2UvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvcGFnZS9tYWluL0U6XFxQcm9qZWN0XFxndXJ1LXVpL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHBhZ2VcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLDhEQUFBO0FDQUY7QURHQTtFQUNFLHVCQUFBO0VBQ0EsNERBQUE7QUNERjtBRElBO0VBQ0Usc0JBQUE7RUFDQSwyREFBQTtBQ0ZGO0FES0E7RUFDRSwrQkFBQTtFQUNBLG9FQUFBO0FDSEY7QURNQTtFQUNFLDZCQUFBO0VBQ0Esa0VBQUE7QUNKRjtBRE9BO0VBQ0UsNEJBQUE7RUFDQSxpRUFBQTtBQ0xGO0FEdEJBO0VBQ0UseUJBQUE7RUFDQSw4REFBQTtBQ3dCRjtBRHJCQTtFQUNFLHVCQUFBO0VBQ0EsNERBQUE7QUN1QkY7QURwQkE7RUFDRSxzQkFBQTtFQUNBLDJEQUFBO0FDc0JGO0FEbkJBO0VBQ0UsK0JBQUE7RUFDQSxvRUFBQTtBQ3FCRjtBRGxCQTtFQUNFLDZCQUFBO0VBQ0Esa0VBQUE7QUNvQkY7QURqQkE7RUFDRSw0QkFBQTtFQUNBLGlFQUFBO0FDbUJGO0FDOUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURnREo7QUMvQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRGlEUiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wYWdlL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEJPR0xFXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXI7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJsYWNrO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJsYWNrLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZDtcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Cb2dsZS1Cb2xkLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhckl0YWxpYztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9Cb2dsZS1SZWd1bGFySXRhbGljLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2tJdGFsaWM7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvQm9nbGUtQmxhY2tJdGFsaWMub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogQm9nbGVCb2xkSXRhbGljO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGRJdGFsaWMub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFyO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhci5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2s7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1CbGFjay5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZDtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGQub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZVJlZ3VsYXJJdGFsaWM7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1SZWd1bGFySXRhbGljLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVCbGFja0l0YWxpYztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJsYWNrSXRhbGljLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVCb2xkSXRhbGljO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtQm9sZEl0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlUmVndWxhcjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLVJlZ3VsYXIub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJsYWNrO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtQmxhY2sub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBCb2dsZUJvbGQ7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1Cb2xkLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQm9nbGVSZWd1bGFySXRhbGljO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQm9nbGUtUmVndWxhckl0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQmxhY2tJdGFsaWM7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9Cb2dsZS1CbGFja0l0YWxpYy5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEJvZ2xlQm9sZEl0YWxpYztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0JvZ2xlLUJvbGRJdGFsaWMub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW4gLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbi5tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'guru-dashboard-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map