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
var user_1 = require("../models/user");
var client_1 = require("../models/client");
var RegistrationComponent = (function () {
    function RegistrationComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.client = new client_1.Client();
        this.user = new user_1.User();
        this.mask = ['+', '3', '7', '5', ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.errLogin = false;
    }
    RegistrationComponent.prototype.regist = function () {
        var _this = this;
        this.user.client = this.client;
        this.httpService.postUsers(this.user).subscribe(function (data) {
            if (data.message === 'User register')
                _this.router.navigate(['/login']);
        });
    };
    RegistrationComponent.prototype.loginUser = function () {
        this.router.navigate(['/login']);
    };
    RegistrationComponent.prototype.checkUniq = function (login) {
        var _this = this;
        this.httpService.uniqLogin(login).subscribe(function (data) {
            var bool = data.json().user == '' ? false : true;
            _this.errLogin = !bool;
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/template/register.component.html',
            styles: ["\n        #register {\n            width: 80%;\n            margin: 50px auto;\n        }\n        \n        .errorField {\n            background-color: #e4b9b9;\n        }\n        \n    "],
            providers: [http_service_1.HttpService]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map