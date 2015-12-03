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
var editorService_1 = require('scripts/editorService');
var currentBlog_1 = require('scripts/currentBlog');
var editSettingPanel_1 = require('scripts/editSettingPanel');
var home = (function () {
    function home(editorService, currentBlog) {
        this.editorService = editorService;
        this.currentBlog = currentBlog;
        /* if(this.currentBlog.title == null)
             this.currentBlog.setTitle("javascript is awesome");*/
        this.currentBlog.getBlog('#myBlog');
        $('#titlePan').hide();
    }
    home = __decorate([
        angular2_1.Component({
            selector: "my-home"
        }),
        angular2_1.View({
            directives: [angular2_1.NgClass, editSettingPanel_1.EditSettingPanel],
            styles: ['.hidden{ display : none} .visible{ display : block}'],
            templateUrl: "views/blog-panel.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof editorService_1.EditorService !== 'undefined' && editorService_1.EditorService) === 'function' && _a) || Object, (typeof (_b = typeof currentBlog_1.CurrentBlog !== 'undefined' && currentBlog_1.CurrentBlog) === 'function' && _b) || Object])
    ], home);
    return home;
    var _a, _b;
})();
exports.home = home;
//# sourceMappingURL=home.js.map