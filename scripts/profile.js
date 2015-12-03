/**
 * Created by rohitk on 22-Nov-15.
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