"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app.component");
var home_component_1 = require("./components/home.component");
var about_component_1 = require("./components/about.component");
var users_component_1 = require("./components/users.component");
var http_1 = require("@angular/http");
var authorise_module_1 = require("./modules/authorise.module");
var product_module_1 = require("./modules/product.module");
var login_component_1 = require("./components/login.component");
var registration_component_1 = require("./components/registration.component");
var navigate_component_1 = require("./components/navigate.component");
var category_component_1 = require("./components/category.component");
var goods_component_1 = require("./components/goods.component");
var private_component_1 = require("./components/private.component");
var addproduct_component_1 = require("./components/addproduct.component");
var contacts_component_1 = require("./components/contacts.component");
var angular2_yandex_maps_1 = require("angular2-yandex-maps");
var replies_component_1 = require("./components/replies.component");
var angular2_text_mask_1 = require("angular2-text-mask");
var itemRoutes = [
    { path: ':category', component: category_component_1.CategoryComponent },
    { path: ':category/:goods', component: goods_component_1.GoodsComponent }
];
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'private', component: private_component_1.PrivateComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'products', component: navigate_component_1.NavigateComponent },
    { path: 'products', component: navigate_component_1.NavigateComponent, children: itemRoutes },
    { path: 'addproduct', component: addproduct_component_1.AddproductComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'replies', component: replies_component_1.RepliesComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, authorise_module_1.AuthoriseModule, forms_1.ReactiveFormsModule, product_module_1.ProductModule, angular2_yandex_maps_1.YaCoreModule.forRoot(), angular2_text_mask_1.TextMaskModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, users_component_1.UsersComponent, private_component_1.PrivateComponent, contacts_component_1.ContactsComponent, replies_component_1.RepliesComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map