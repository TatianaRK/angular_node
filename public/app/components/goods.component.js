"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../services/http.service");
var router_1 = require("@angular/router");
var order_1 = require("../models/order");
var GoodsComponent = (function () {
    function GoodsComponent(httpService, route, router) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.check = false;
        this.authenticate = false;
        this.numb = 1;
        this.order = new order_1.Order();
    }
    GoodsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.httpService.getProduct(params['goods']); })
            .subscribe(function (data) {
            _this.goods = data.json().product;
        });
        this.httpService.isAuthenticated().subscribe(function (data) {
            if (data.json().message === 'authenticated') {
                _this.authenticate = true;
                _this.userName = data.json().user.login;
            }
        });
    };
    GoodsComponent.prototype.change = function () {
        this.check = !this.check;
    };
    GoodsComponent.prototype.addOrder = function (articul) {
        var _this = this;
        this.order.loginUser = this.userName;
        this.order.articul = articul;
        this.order.number = this.numb;
        this.order.summ = this.goods[0].cost * this.numb;
        this.order.date = this.date;
        this.order.status = 'Зарезервированно';
        this.order.delivery = this.check;
        this.httpService.addOrder(this.order).subscribe(function (data) {
            if (data.json().message === 'Order added')
                _this.router.navigate(['/products']);
        });
    };
    GoodsComponent = __decorate([
        core_1.Component({
            selector: 'goods',
            templateUrl: 'app/template/goods.component.html',
            styleUrls: ['css/products.css'],
            providers: [http_service_1.HttpService]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], GoodsComponent);
    return GoodsComponent;
}());
exports.GoodsComponent = GoodsComponent;
//# sourceMappingURL=goods.component.js.map