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
 * Created by rohitk on 30-Nov-15.
 */
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var httpService_1 = require('scripts/httpService');
var register = (function () {
    function register(httpService) {
        this.httpService = httpService;
        this.duplicateUsernameFlag = false;
        this.registerForm = new angular2_1.ControlGroup({
            username: new angular2_1.Control(),
            password: new angular2_1.Control(),
            confirmPassword: new angular2_1.Control(),
            agreementFlag: new angular2_1.Control(false)
        });
    }
    register.prototype.checkDuplicate = function () {
        var username = this.registerForm.controls.username.value;
        this.httpService.post('/checkduplicate', JSON.stringify({ username: username }))
            .subscribe(function (data) {
            var response = JSON.parse(data._body);
            this.duplicateUsernameFlag = response.status;
        }.bind(this));
    };
    register.prototype.register = function () {
        this.submitFlag = true;
        var username = this.registerForm.controls.username.value;
        var password = this.registerForm.controls.password.value;
        var confirmPassword = this.registerForm.controls.confirmPassword.value;
        var agreementFlag = this.registerForm.controls.agreementFlag._value;
        // let passwordLengthFlag = this.registerForm.controls.password._value.length < 6;
        if (username && password && confirmPassword && agreementFlag && !this.duplicateUsernameFlag) {
            this.httpService.post('/register', JSON.stringify({
                username: username,
                password: password
            })).subscribe(function (data) {
                var response = JSON.parse(data._body);
                if (response.status)
                    location.hash = "";
                else
                    this.registerMessage = response.message;
            }.bind(this));
        }
    };
    register = __decorate([
        angular2_1.Component({
            selector: "my-register"
        }),
        angular2_1.View({
            directives: [angular2_1.NgClass, router_1.RouterLink, angular2_1.FORM_DIRECTIVES],
            templateUrl: "views/register.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _a) || Object])
    ], register);
    return register;
    var _a;
})();
exports.register = register;
//# sourceMappingURL=register.js.map