webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/openbravo/Desktop/Ionic/Github/Grid/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title style="text-align: center!important;">GRID</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="grid-basic-page" padding>\n\n  <h6 padding>\n    Columns with equal length\n  </h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 padding>\n    Setting one column width\n  </h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>2 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <div>1 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 padding>\n    Variable-width columns\n  </h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div>Variable width content</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div>\n          <ion-icon name="globe"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 padding>\n    Offsetting columns\n  </h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col offset-4>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 padding>\n    Push and pull\n  </h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-9 push-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6 push-3>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3 push-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 padding>\n    Setting all column widths<br>\n  </h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-5>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 padding>\n    Vertical alignment\n  </h6>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4 <br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4 <br>#<br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-start>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-end>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-start>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col align-self-center>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col align-self-end>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 padding>\n    Horizontal Alignment\n  </h6>\n  <ion-grid>\n    <ion-row justify-content-start>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-end>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-around>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-between>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <p padding-left style="text-align: center!important;">Created By: <a href="https://github.com/MandaliyaPruthvi">Pruthvi\n        Mandaliya</a></p>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/openbravo/Desktop/Ionic/Github/Grid/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/openbravo/Desktop/Ionic/Github/Grid/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/openbravo/Desktop/Ionic/Github/Grid/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map