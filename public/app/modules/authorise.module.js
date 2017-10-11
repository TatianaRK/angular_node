"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_text_mask_1 = require("angular2-text-mask");
var registration_component_1 = require("../components/registration.component");
var login_component_1 = require("../components/login.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var AuthoriseModule = (function () {
    function AuthoriseModule() {
    }
    AuthoriseModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent, registration_component_1.RegistrationComponent],
            exports: [login_component_1.LoginComponent, registration_component_1.RegistrationComponent],
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule, angular2_text_mask_1.TextMaskModule]
        })
    ], AuthoriseModule);
    return AuthoriseModule;
}());
exports.AuthoriseModule = AuthoriseModule;
//# sourceMappingURL=authorise.module.js.map