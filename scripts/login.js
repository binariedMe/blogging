/**
 * Created by rohitk on 30-Nov-15.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var httpService_1 = require('scripts/httpService');
var login = (function () {
    function login(httpService) {
        this.httpService = httpService;
        this.loginMessage = null;
        this.submitFlag = false;
        this.loginForm = new angular2_1.ControlGroup({
            username: new angular2_1.Control(),
            password: new angular2_1.Control()
        });
    }
    login.prototype.login = function () {
        this.submitFlag = true;
        var username = this.loginForm.controls.username.value;
        var password = this.loginForm.controls.password.value;
        if (username && password) {
            this.httpService.post('/login', JSON.stringify({
                username: username,
                password: password
            })).subscribe(function (data) {
                var response = JSON.parse(data._body);
                if (response.status)
                    location.pathname = "/";
                else
                    this.loginMessage = response.message;
            }.bind(this));
        }
    };
    login = __decorate([
        angular2_1.Component({
            selector: "my-login"
        }),
        angular2_1.View({
            directives: [angular2_1.NgClass, router_1.RouterLink, angular2_1.FORM_DIRECTIVES],
            templateUrl: "views/login.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _a) || Object])
    ], login);
    return login;
    var _a;
})();
exports.login = login;
//# sourceMappingURL=login.js.map