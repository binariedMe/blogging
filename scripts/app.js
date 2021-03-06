var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var sidebar_1 = require('scripts/sidebar');
var home_1 = require('scripts/home');
var profile_1 = require('scripts/profile');
var editorService_1 = require('scripts/editorService');
var currentBlog_1 = require('scripts/currentBlog');
var httpService_1 = require('scripts/httpService');
var editSettingPanel_1 = require('scripts/editSettingPanel');
var user_1 = require('scripts/user');
var util_1 = require('scripts/util');
var SocketFactory_1 = require('scripts/SocketFactory');
var CommentPanel_1 = require('scripts/CommentPanel');
var CommentService_1 = require('scripts/CommentService');
var testClass = (function () {
    function testClass(httpService, user, util) {
        this.httpService = httpService;
        this.user = user;
        this.util = util;
        this.greetingArray = ["Howdy, ", "Welcome, ", "What's up, ", "High five, ", "Good Morning ", "Hey, "];
        this.tabs = [{ 'Home': 'active', 'Myprofile': '' }];
        this.activateMe("Home");
        user.getUser();
    }
    testClass.prototype.activateMe = function (tab) {
        this.tabs = [{ 'Home': '', 'Myprofile': '' }];
        this.tabs[tab] = 'active';
    };
    testClass.prototype.greetMe = function () {
        var index = this.util.getRandomInteger(0, this.greetingArray.length - 1);
        var message = this.greetingArray[index] + this.user.userObject.username + " !!!";
        return message;
    };
    testClass = __decorate([
        angular2_1.Component({
            selector: "my-app"
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.NgClass, sidebar_1.sidebar, editSettingPanel_1.EditSettingPanel, CommentPanel_1.CommentPanel],
            templateUrl: "views/app.html"
        }),
        router_1.RouteConfig([
            { path: '/', as: "Home", component: home_1.home },
            { path: '/binariedMe', as: "Myprofile", component: profile_1.profile }
        ]), 
        __metadata('design:paramtypes', [(typeof (_a = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _a) || Object, (typeof (_b = typeof user_1.User !== 'undefined' && user_1.User) === 'function' && _b) || Object, (typeof (_c = typeof util_1.Util !== 'undefined' && util_1.Util) === 'function' && _c) || Object])
    ], testClass);
    return testClass;
    var _a, _b, _c;
})();
angular2_1.bootstrap(testClass, [
    util_1.Util,
    user_1.User,
    http_1.HTTP_BINDINGS,
    editorService_1.EditorService,
    currentBlog_1.CurrentBlog,
    httpService_1.HttpService,
    editSettingPanel_1.EditSettingPanel,
    router_2.ROUTER_PROVIDERS,
    angular2_1.FORM_PROVIDERS,
    SocketFactory_1.SocketFactory,
    CommentService_1.CommentService,
    angular2_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })
]).then(function (success) { return console.log('App Bootstrapped!'); }, function (error) { return console.log(error); });
//# sourceMappingURL=app.js.map