/**
 * Created by rohitk on 22-Nov-15.
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
var sidebar_1 = require('scripts/sidebar');
var profile = (function () {
    function profile() {
        this.Name = "Rohit Kumar";
    }
    profile = __decorate([
        angular2_1.Component({
            selector: "my-profile"
        }),
        angular2_1.View({
            directives: [sidebar_1.sidebar],
            templateUrl: "views/binariedMe.html"
        }), 
        __metadata('design:paramtypes', [])
    ], profile);
    return profile;
})();
exports.profile = profile;
//# sourceMappingURL=profile.js.map