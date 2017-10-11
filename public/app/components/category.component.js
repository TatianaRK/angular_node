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
require("rxjs/add/operator/switchMap");
var product_1 = require("../models/product");
var CategoryComponent = (function () {
    function CategoryComponent(httpService, route, router) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.temp = false;
        this.authenticate = false;
        this.admin = false;
        this.nullField = false;
        this.products = new Array();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadProducts();
        this.httpService.isAuthenticated().subscribe(function (data) {
            if (data.json().message === 'authenticated') {
                _this.authenticate = true;
                if (data.json().user.role === 'admin') {
                    _this.admin = true;
                }
                else
                    _this.admin = false;
            }
        });
    };
    CategoryComponent.prototype.loadProducts = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.httpService.getPriductsFromCategory(params['category']); })
            .subscribe(function (data) {
            _this.products = data.json().listProducts;
        });
    };
    CategoryComponent.prototype.editProduct = function (product) {
        this.editedProduct = new product_1.Product(product._id, product.articul, product.name, product.about, product.colors, product.material, product.w_h, product.quantity, product.cost, product.status, product.image, product.salesText, 0);
    };
    CategoryComponent.prototype.loadTemplate = function (product) {
        if (this.editedProduct && this.editedProduct.articul == product.articul) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    CategoryComponent.prototype.saveProduct = function () {
        var _this = this;
        this.httpService.editProduct(JSON.stringify(this.editedProduct), this.editedProduct._id.toString()).subscribe(function (resp) {
            _this.statusMessage = 'Данные успешно обновлены';
            _this.loadProducts();
        });
        this.editedProduct = null;
    };
    __decorate([
        core_1.ViewChild('readOnlyTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], CategoryComponent.prototype, "readOnlyTemplate", void 0);
    __decorate([
        core_1.ViewChild('editTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], CategoryComponent.prototype, "editTemplate", void 0);
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'listProduct',
            templateUrl: 'app/template/category.component.html',
            styleUrls: ['css/products.css'],
            providers: [http_service_1.HttpService]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map