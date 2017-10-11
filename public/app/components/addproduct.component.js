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
var AddproductComponent = (function () {
    function AddproductComponent(httpService) {
        this.httpService = httpService;
        this.errArticul = false;
        this.success = true;
    }
    AddproductComponent.prototype.addProduct = function () {
        var _this = this;
        if (this.articul.toString().length < 6) {
            this.errArticul = true;
            this.messageArticul = 'Артикул должен иметь не менее 6 цифр!';
            return;
        }
        else
            this.errArticul = false;
        var json = JSON.stringify({
            articul: this.articul,
            name: this.nameProduct,
            category: this.category,
            about: this.about,
            material: this.material,
            colors: this.colors,
            w_h: this.w_h,
            quantity: this.quantity,
            cost: this.cost,
            status: this.status,
            image: this.image
        });
        this.httpService.addProduct(json).subscribe(function (data) {
            if (data.json().message === 'Product added') {
                _this.success = false;
                _this.articul = null;
                _this.nameProduct = null;
                _this.category = null;
                _this.about = null;
                _this.material = null;
                _this.colors = null;
                _this.w_h = null;
                _this.quantity = null;
                _this.cost = null;
                _this.status = null;
                _this.image = null;
            }
        });
    };
    AddproductComponent = __decorate([
        core_1.Component({
            selector: 'add-product',
            templateUrl: 'app/template/addproduct.component.html',
            styles: ["\n        select option {\n            color: #000;\n        }\n        \n        input, select, textarea, button {\n            margin-bottom: 8px;\n        }\n\n        #addProduct {\n            width: 80%;\n            margin: 0 auto;\n            margin-top: 50px;\n        }\n    "],
            providers: [http_service_1.HttpService]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AddproductComponent);
    return AddproductComponent;
}());
exports.AddproductComponent = AddproductComponent;
//# sourceMappingURL=addproduct.component.js.map