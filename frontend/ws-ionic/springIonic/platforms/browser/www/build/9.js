webpackJsonp([9],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__ = __webpack_require__(152);
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var cart = this.cartService.getCart();
        this.items = cart.items;
    };
    CartPage.prototype.removeItem = function (produto) {
        this.items = this.cartService.removeProduto(produto).items;
    };
    CartPage.prototype.increaseQuantity = function (produto) {
        this.items = this.cartService.increaseQuantity(produto).items;
    };
    CartPage.prototype.decreaseQuantity = function (produto) {
        this.items = this.cartService.decreaseQuantity(produto).items;
    };
    CartPage.prototype.total = function () {
        return this.cartService.total();
    };
    CartPage.prototype.goOn = function () {
        this.navCtrl.setRoot("CategoriasPage");
    };
    CartPage.prototype.checkout = function () {
        this.navCtrl.push("PickAdressPage");
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\victo\Desktop\eclipseJava\ws-sts\ws-ionic\springIonic\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <ion-thumbnail item-start>\n        <img [src]="item.produto.imageUrl || \'assets/imgs/prod.jpg\'">\n      </ion-thumbnail>\n      <h2>{{item.produto.nome}}</h2>\n      <p>{{item.produto.preco | currency}}</p>\n      <ion-icon  class="nolinebreak"name="remove-circle" color="primary"  (click)=decreaseQuantity(item.produto)></ion-icon>\n      <p class="nolinebreak" >{{item.quantidade}}</p>\n      <ion-icon name="add-circle" color="primary" (click)=increaseQuantity(item.produto)></ion-icon>\n      <ion-icon name="trash" item-end color="danger" (click)="removeItem(item.produto)"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf="total() >0">\n      <h1>Total</h1>\n      <h1 item-end>{{total()}}</h1>\n    </ion-item>\n    <ion-item *ngIf="total() <=0">\n      <h1 item-end>Seu carrinho está vazio</h1>\n    </ion-item>\n    <button ion-button block (click)="goOn()">Continuar comprando</button>\n    <button ion-button color="secondary" *ngIf="total() >0" block (click)="checkout()">Finalizar Pedido</button>\n  </ion-list>   '/*ion-inline-end:"C:\Users\victo\Desktop\eclipseJava\ws-sts\ws-ionic\springIonic\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__["a" /* CartService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=9.js.map