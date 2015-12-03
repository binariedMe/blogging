/**
 * Created by rohitk on 30-Nov-15.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by rohitk on 12-Nov-15.
 */
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var httpService_1 = require('scripts/httpService');
var login_1 = require('scripts/login');
var register_1 = require('scripts/register');
var testClass = (function () {
    function testClass() {
        this.tabs = [{ 'Home': 'active', 'Myprofile': '' }];
        this.activateMe("Home");
    }
    testClass.prototype.activateMe = function (tab) {
        this.tabs = [{ 'Home': '', 'Myprofile': '' }];
        this.tabs[tab] = 'active';
    };
    testClass = __decorate([
        angular2_1.Component({
            selector: "my-auth"
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgClass],
            templateUrl: "views/authPanel.html"
        }),
        router_1.RouteConfig([
            { path: '/', as: "Login", component: login_1.login },
            { path: '/login', as: "Log-in", component: login_1.login },
            { path: '/register', as: "Register", component: register_1.register }
        ]), 
        __metadata('design:paramtypes', [])
    ], testClass);
    return testClass;
})();
angular2_1.bootstrap(testClass, [http_1.HTTP_BINDINGS, httpService_1.HttpService,
    router_2.ROUTER_PROVIDERS,
    angular2_1.FORM_PROVIDERS,
    angular2_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })
]).then(function (success) { return console.log('App Bootstrapped!'); }, function (error) { return console.log(error); });
//# sourceMappingURL=auth.js.map