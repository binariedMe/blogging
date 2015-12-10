/**
 * Created by rohitk on 04-Dec-15.
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
var core_1 = require('angular2/core');
var httpService_1 = require('scripts/httpService');
var User = (function () {
    function User(httpService) {
        this.httpService = httpService;
        this.userObject = { username: "Guest", loginFlag: true };
    }
    User.prototype.getUser = function () {
        this.httpService.get('/getusername', null).subscribe(function (data) {
            var response = JSON.parse(data._body);
            // this.userObject.username = response.username;
            //this.userObject.loginFlag = response.loginFlag;
            this.userObject = { username: response.username, loginFlag: response.loginFlag };
        }.bind(this));
    };
    User = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _a) || Object])
    ], User);
    return User;
    var _a;
})();
exports.User = User;
//# sourceMappingURL=user.js.map