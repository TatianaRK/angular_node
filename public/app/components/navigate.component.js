"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavigateComponent = (function () {
    function NavigateComponent() {
    }
    NavigateComponent = __decorate([
        core_1.Component({
            selector: '#navigate',
            templateUrl: 'app/template/navigate.component.html',
            styles: ["\n        #categories {\n            display: flex;\n            flex-flow: row wrap;\n            width: 100%;\n            justify-content: space-between;\n        }\n        \n        #categories div {\n            flex-basis: 33%;\n            height: 200px;\n            text-align: center;\n            margin-bottom: 10px;\n            background-position: center;\n            background-size: cover;\n        }\n\n        #categories a {\n            text-decoration: none;\n            display: inline-block;\n            margin-top: 90px;\n            font-size: 18px;\n            color: #000;\n            font-family: SFUIDisplay-Light, Tahoma, Verdan\u0430, Arial;\n        }\n\n        #categories a:hover {\n            color: #fff;\n            font-size: 20px;\n        }\n        \n        #category1 {\n            background-image: url(\"../../images/office.jpg\");\n        }\n\n        #category2 {\n            background-image: url(\"../../images/room.jpg\");\n        }\n\n        #category3 {\n            background-image: url(\"../../images/kitchen.jpg\");\n        }\n        \n        #category4 {\n            background-image: url(\"../../images/soft.jpg\");\n        }\n        \n        #category5 {\n            background-image: url(\"../../images/child.jpg\");\n        }\n        \n        #category6 {\n            background-image: url(\"../../images/other.jpg\");\n        }\n    "]
        })
    ], NavigateComponent);
    return NavigateComponent;
}());
exports.NavigateComponent = NavigateComponent;
//# sourceMappingURL=navigate.component.js.map