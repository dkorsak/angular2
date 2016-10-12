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
var core_1 = require('@angular/core');
var user_service_1 = require('../Services/user.service');
var UsersListComponent = (function () {
    function UsersListComponent(userService) {
        this.userService = userService;
    }
    UsersListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { _this.users = users; }, function (err) {
            console.log(err);
        });
    };
    UsersListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UsersListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users-list',
            providers: [user_service_1.UserService],
            templateUrl: '../Views/users-list.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map