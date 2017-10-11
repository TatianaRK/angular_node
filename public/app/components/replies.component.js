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
var replies_1 = require("../models/replies");
var http_service_1 = require("../services/http.service");
var RepliesComponent = (function () {
    function RepliesComponent(http) {
        this.http = http;
        this.replies = [];
        this.authenticate = false;
        this.admin = false;
    }
    RepliesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getReplies().subscribe(function (data) { return _this.replies = data.json().listReplies; });
        this.http.isAuthenticated().subscribe(function (data) {
            if (data.json().message === 'authenticated') {
                _this.authenticate = true;
                _this.curLoginUser = data.json().user.login;
                if (data.json().user.role === 'admin') {
                    _this.admin = true;
                }
                else
                    _this.admin = false;
            }
        });
    };
    RepliesComponent.prototype.addReply = function (reply) {
        this.http.addReply(JSON.stringify({ loginUser: this.curLoginUser, message: reply })).subscribe(function (data) { });
        this.replies.unshift(new replies_1.Replies(this.curLoginUser, reply, new Date()));
        this.reply = '';
    };
    RepliesComponent.prototype.removeReply = function (id, i) {
        var _this = this;
        this.http.deleteReply(id.toString()).subscribe(function (data) {
            _this.replies.splice(i, 1);
        });
    };
    RepliesComponent = __decorate([
        core_1.Component({
            selector: 'replies',
            templateUrl: 'app/template/replies.component.html',
            styles: ["\n        .replies {\n            width: 100%;\n            margin-top: 40px;\n        }\n        \n        .name {\n            font-weight: bold;\n            font-size: 16px;\n        }\n        \n        .date {\n            font-size: 16px;\n            color: #ccc;\n        }\n\n        #repliesList {\n            width: 80%;\n            margin: 50px auto;\n            margin-top: 150px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], RepliesComponent);
    return RepliesComponent;
}());
exports.RepliesComponent = RepliesComponent;
//# sourceMappingURL=replies.component.js.map