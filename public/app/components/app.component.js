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
var AppComponent = (function () {
    function AppComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.authorize = false;
        this.admin = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.isAuthenticated().subscribe(function (data) {
            if (data.json().message === 'authenticated') {
                _this.authorize = true;
                _this.admin = (data.json().user.role === 'admin') ? true : false;
            }
            else
                _this.authorize = false;
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.httpService.logout().subscribe(function (data) {
            _this.authorize = false;
            _this.admin = false;
            _this.router.navigate(['/']);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: '#app',
            templateUrl: 'app/template/app.component.html',
            styleUrls: ['css/app.css'],
            providers: [http_service_1.HttpService]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map