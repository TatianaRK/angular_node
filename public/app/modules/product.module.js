"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var navigate_component_1 = require("../components/navigate.component");
var category_component_1 = require("../components/category.component");
var platform_browser_1 = require("@angular/platform-browser");
var goods_component_1 = require("../components/goods.component");
var addproduct_component_1 = require("../components/addproduct.component");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule, router_1.RouterModule, platform_browser_1.BrowserModule],
            declarations: [navigate_component_1.NavigateComponent, category_component_1.CategoryComponent, goods_component_1.GoodsComponent, addproduct_component_1.AddproductComponent],
            exports: [navigate_component_1.NavigateComponent, category_component_1.CategoryComponent, goods_component_1.GoodsComponent, addproduct_component_1.AddproductComponent]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map