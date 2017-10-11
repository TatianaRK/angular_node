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
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.visible = "none";
        this.loginForm = new forms_1.FormGroup({
            "loginuser": new forms_1.FormControl("", forms_1.Validators.required),
            "pass": new forms_1.FormControl("", forms_1.Validators.required)
        });
    }
    LoginComponent.prototype.auth = function () {
        var _this = this;
        this.httpService.authorise(this.loginForm.value.loginuser, this.loginForm.value.pass).subscribe(function (data) {
            if (data.json().message === 'fail') {
                _this.message = "Неверный логин и/или пароль";
                _this.visible = "block";
            }
            else {
                _this.visible = "none";
                window.location.href = '/';
            }
        });
    };
    LoginComponent.prototype.reg = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/template/login.component.html',
            styles: ["\n        #login {\n            margin: 200px auto;\n            width: 80%;\n        }\n    "],
            providers: [http_service_1.HttpService]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map