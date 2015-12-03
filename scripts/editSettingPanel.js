/**
 * Created by rohitk on 01-Dec-15.
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
var core_1 = require('angular2/core');
var EditSettingPanel = (function () {
    function EditSettingPanel(editorService, currentBlog) {
        this.editorService = editorService;
        this.currentBlog = currentBlog;
        /* if(this.currentBlog.title == null)
             this.currentBlog.setTitle("javascript is awesome");
         this.currentBlog.getBlog('#myBlog');*/
    }
    EditSettingPanel.prototype.new = function () {
        this.currentBlog.setNewBlogFlag(true);
        $('#titlePan').show();
        $('#myBlog').html("");
        this.editorService.showEditor('#summernote');
    };
    EditSettingPanel.prototype.edit = function () {
        this.currentBlog.setNewBlogFlag(false);
        $("#title").val(this.currentBlog.title);
        $('#titlePan').show();
        $('#myBlog').html("");
        this.editorService.showEditor('#summernote');
        $('#summernote').code(this.currentBlog.content);
    };
    EditSettingPanel.prototype.cancel = function () {
        $("#title").val("");
        $('#summernote').code("");
        $('#titlePan').hide();
        this.currentBlog.setBlogPanel('#myBlog', null);
        this.editorService.removeEditor('#summernote');
    };
    EditSettingPanel.prototype.save = function () {
        var data = this.editorService.saveEdits('#summernote');
        this.currentBlog.saveBlog($('#title').val(), data);
        $("#title").val("");
        $('#titlePan').hide();
    };
    EditSettingPanel = __decorate([
        angular2_1.Component({
            selector: "edit-setting-panel"
        }),
        angular2_1.View({
            directives: [angular2_1.NgClass],
            templateUrl: "views/edit-setting-panel.html"
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof editorService_1.EditorService !== 'undefined' && editorService_1.EditorService) === 'function' && _a) || Object, (typeof (_b = typeof currentBlog_1.CurrentBlog !== 'undefined' && currentBlog_1.CurrentBlog) === 'function' && _b) || Object])
    ], EditSettingPanel);
    return EditSettingPanel;
    var _a, _b;
})();
exports.EditSettingPanel = EditSettingPanel;
//# sourceMappingURL=editSettingPanel.js.map