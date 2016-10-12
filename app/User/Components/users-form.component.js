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
var router_1 = require('@angular/router');
var user_service_1 = require('../Services/user.service');
var user_1 = require('../model/user');
var UsersFormComponent = (function () {
    function UsersFormComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UsersFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            if (!isNaN(id)) {
                _this.user = new user_1.User();
                console.log('edit');
                _this.userService.getUser(id)
                    .subscribe(function (user) { _this.user = user; }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.user = new user_1.User();
                console.log('create');
            }
        });
    };
    UsersFormComponent.prototype.gotoHeroes = function () { this.router.navigate(['/user']); };
    UsersFormComponent.prototype.onSubmit = function () {
        console.log(this.user);
        this.gotoHeroes();
    };
    UsersFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users-form',
            providers: [user_service_1.UserService],
            templateUrl: '../Views/users-form.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], UsersFormComponent);
    return UsersFormComponent;
}());
exports.UsersFormComponent = UsersFormComponent;
//# sourceMappingURL=users-form.component.js.map