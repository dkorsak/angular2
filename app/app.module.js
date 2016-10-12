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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var users_list_component_1 = require('./User/Components/users-list.component');
var users_form_component_1 = require('./User/Components/users-form.component');
var MaterialDesignLiteUpgradeElement_1 = require('./MaterialDesignLiteUpgradeElement');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: users_list_component_1.UsersListComponent, pathMatch: 'full' },
                    { path: 'user', component: users_list_component_1.UsersListComponent },
                    { path: 'user/:id/edit', component: users_form_component_1.UsersFormComponent },
                    { path: 'user/create', component: users_form_component_1.UsersFormComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                MaterialDesignLiteUpgradeElement_1.MDL,
                users_list_component_1.UsersListComponent,
                users_form_component_1.UsersFormComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map