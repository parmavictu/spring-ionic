webpackJsonp([4],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoDetailPageModule", function() { return ProdutoDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_detail__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutoDetailPageModule = /** @class */ (function () {
    function ProdutoDetailPageModule() {
    }
    ProdutoDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produto_detail__["a" /* ProdutoDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produto_detail__["a" /* ProdutoDetailPage */]),
            ],
        })
    ], ProdutoDetailPageModule);
    return ProdutoDetailPageModule;
}());

//# sourceMappingURL=produto-detail.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_produto_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cart_service__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProdutoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoDetailPage = /** @class */ (function () {
    function ProdutoDetailPage(navCtrl, navParams, produtoService, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoService = produtoService;
        this.cartService = cartService;
    }
    ProdutoDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var produto_id = this.navParams.get("produto_id");
        this.produtoService.findById(produto_id)
            .subscribe(function (response) {
            _this.item = response;
        }, function (error) { });
    };
    ProdutoDetailPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.setRoot("CartPage");
    };
    ProdutoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-produto-detail',template:/*ion-inline-start:"C:\Users\victo\Desktop\eclipseJava\ws-sts\ws-ionic\springIonic\src\pages\produto-detail\produto-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ProdutoDetail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab top right edge>\n    <button navPush="CartPage" ion-fab mini><ion-icon name="cart"></ion-icon></button>\n  </ion-fab>\n  <ion-card>\n    <img [src]="item?.imageUrl || \'assets/imgs/prod.jpg\'"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{item?.nome}}\n        </ion-card-title>\n      <p>\n        {{item?.preco | currency}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button block outline (click)="addToCart(item)">Adicionar ao carrinho</button>\n</ion-content>'/*ion-inline-end:"C:\Users\victo\Desktop\eclipseJava\ws-sts\ws-ionic\springIonic\src\pages\produto-detail\produto-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_produto_service__["a" /* ProdutoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_cart_service__["a" /* CartService */]])
    ], ProdutoDetailPage);
    return ProdutoDetailPage;
}());

//# sourceMappingURL=produto-detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map