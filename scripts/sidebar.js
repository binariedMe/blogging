/**
 * Created by rohitk on 23-Nov-15.
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
var httpService_1 = require('scripts/httpService');
var currentBlog_1 = require('scripts/currentBlog');
var editSettingPanel_1 = require('scripts/editSettingPanel');
var sidebar = (function () {
    function sidebar(currentBlog, httpService, editSettingPanel) {
        this.currentBlog = currentBlog;
        this.httpService = httpService;
        this.editSettingPanel = editSettingPanel;
        currentBlog.reloadBlogList();
    }
    sidebar.prototype.loadBlog = function (blog) {
        location.hash = "";
        this.currentBlog.setTitle(blog);
        this.currentBlog.getBlog('#myBlog');
        this.editSettingPanel.cancel();
    };
    sidebar = __decorate([
        angular2_1.Component({
            selector: "side-bar"
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgClass],
            templateUrl: "views/sidebar.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof currentBlog_1.CurrentBlog !== 'undefined' && currentBlog_1.CurrentBlog) === 'function' && _a) || Object, (typeof (_b = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _b) || Object, (typeof (_c = typeof editSettingPanel_1.EditSettingPanel !== 'undefined' && editSettingPanel_1.EditSettingPanel) === 'function' && _c) || Object])
    ], sidebar);
    return sidebar;
    var _a, _b, _c;
})();
exports.sidebar = sidebar;
//# sourceMappingURL=sidebar.js.map