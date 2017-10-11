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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.postUsers = function (obj) {
        var body = JSON.stringify(obj);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/signup', body, options)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    HttpService.prototype.getUsers = function () {
        return this.http.get('/api/users');
    };
    HttpService.prototype.getUser = function (id) {
        return this.http.get('/api/user/' + id);
    };
    HttpService.prototype.editUser = function (json, id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('/api/user/' + id, json, options);
    };
    HttpService.prototype.authorise = function (loginuser, password) {
        var json = { "login": loginuser, "password": password };
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/login', JSON.stringify(json), options);
    };
    HttpService.prototype.logout = function () {
        return this.http.get('/api/logout');
    };
    HttpService.prototype.uniqLogin = function (login) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('/api/loginUser/' + login, options);
    };
    HttpService.prototype.getPriductsFromCategory = function (category) {
        return this.http.get('/api/products/' + category);
    };
    HttpService.prototype.isAuthenticated = function () {
        return this.http.get('/api/isauthenticate');
    };
    HttpService.prototype.getProduct = function (articul) {
        return this.http.get('/api/product/' + articul);
    };
    HttpService.prototype.addProduct = function (json) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/product', json, options);
    };
    HttpService.prototype.editProduct = function (json, id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('/api/product/' + id, json, options);
    };
    HttpService.prototype.deleteProduct = function (id) {
        return this.http.delete('/api/product/' + id);
    };
    HttpService.prototype.addOrder = function (obj) {
        var body = JSON.stringify(obj);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/order', body, options);
    };
    HttpService.prototype.getOrderFromLogin = function (login) {
        return this.http.get('/api/orders/' + login);
    };
    HttpService.prototype.editOrder = function (json, id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('/api/order/' + id, json, options);
    };
    HttpService.prototype.getReplies = function () {
        return this.http.get('/api/replies');
    };
    HttpService.prototype.addReply = function (json) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/reply', json, options);
    };
    HttpService.prototype.deleteReply = function (id) {
        return this.http.delete('/api/reply/' + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map