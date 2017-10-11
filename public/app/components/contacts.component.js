"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactsComponent = (function () {
    function ContactsComponent() {
        this.lat = 53.860198;
        this.lng = 27.481393;
    }
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts',
            templateUrl: 'app/template/contacts.component.html',
            styles: ["\n        #contacts {\n            display: flex;\n            flex-flow: row wrap;\n            justify-content: space-around;\n        }\n        \n        #map {\n            flex-basis: 50%;\n            height: 500px;\n        }\n        \n        #phones {\n            flex-basis: 20%;\n        }\n        \n        .contactPhone {\n            font-size: 16px;\n            font-weight: bold;\n            margin-left: 10px;\n        }\n        \n        img {\n            margin-bottom: 20px;\n        }\n    "]
        })
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map