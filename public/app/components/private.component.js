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
var forms_1 = require("@angular/forms");
var PrivateComponent = (function () {
    function PrivateComponent(httpService) {
        this.httpService = httpService;
        this.nullOrder = false;
        this.confirm = true;
        this.mask = ['+', '3', '7', '5', ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.temp = false;
    }
    PrivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.isAuthenticated().subscribe(function (data) {
            _this.user = data.json().user;
            ;
            _this.httpService.getOrderFromLogin(_this.user.login).subscribe(function (data) {
                _this.orders = data.json().listOrders;
                if (_this.orders.length === 0) {
                    _this.nullOrder = true;
                }
                else {
                    _this.nullOrder = false;
                }
            });
        });
    };
    PrivateComponent.prototype.loadTemplate = function () {
        if (this.temp) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    PrivateComponent.prototype.confirmOrder = function (id, i) {
        this.orders[i].status = 'Подтвержден';
        this.httpService.editOrder(this.orders[i], id.toString()).subscribe(function (data) { });
    };
    PrivateComponent.prototype.edit = function () {
        this.temp = true;
        this.myForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.user.client.name, forms_1.Validators.required),
            surname: new forms_1.FormControl(this.user.client.surname, forms_1.Validators.required),
            lastname: new forms_1.FormControl(this.user.client.lastname, forms_1.Validators.required),
            mail: new forms_1.FormControl(this.user.client.mail, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]),
            phone: new forms_1.FormControl(this.user.client.phone, [forms_1.Validators.required])
        });
    };
    PrivateComponent.prototype.saveData = function () {
        this.temp = false;
        this.user.client = this.myForm.value;
        this.httpService.editUser(this.user.client, this.user._id).subscribe(function (data) { });
    };
    __decorate([
        core_1.ViewChild('readOnlyTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], PrivateComponent.prototype, "readOnlyTemplate", void 0);
    __decorate([
        core_1.ViewChild('editTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], PrivateComponent.prototype, "editTemplate", void 0);
    PrivateComponent = __decorate([
        core_1.Component({
            selector: 'private',
            templateUrl: 'app/template/private.component.html',
            styles: ["\n        #privateData {\n            width: 80%;\n            margin: 50px auto;\n            font-size: 16px;\n        }\n        \n        li {\n            list-style-type: none;\n            margin-bottom: 10px;\n        }\n        \n        #bucket {\n            font-size: 16px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], PrivateComponent);
    return PrivateComponent;
}());
exports.PrivateComponent = PrivateComponent;
//# sourceMappingURL=private.component.js.map