/**
 * Created by rohitk on 27-Nov-15.
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
var CommentService_1 = require('scripts/CommentService');
var CurrentBlog = (function () {
    function CurrentBlog(httpService, commentService) {
        this.httpService = httpService;
        this.commentService = commentService;
    }
    CurrentBlog.prototype.setTitle = function (title) {
        this.title = title;
        this.commentService.loadCommentList(title);
    };
    CurrentBlog.prototype.setContent = function (data) {
        this.content = data;
    };
    CurrentBlog.prototype.setNewBlogFlag = function (flag) {
        this.newBloGFlag = flag;
    };
    CurrentBlog.prototype.reloadBlogList = function () {
        this.httpService.get('/getTitles', null).subscribe(function (response) {
            var list = JSON.parse(response._body);
            this.blogList = list.list;
            if (this.title == null)
                this.setTitle(this.blogList[0]);
        }.bind(this));
    };
    CurrentBlog.prototype.setBlogPanel = function (elementSelector, data) {
        if (data != null) {
            $(elementSelector).html("");
            $(elementSelector).append("<h2>" + this.title + "</h2>");
            $(elementSelector).append(data);
        }
        else {
            $(elementSelector).html("");
            $(elementSelector).append("<h2>" + this.title + "</h2>");
            $(elementSelector).append(this.content);
        }
    };
    CurrentBlog.prototype.saveBlog = function (title, content) {
        var oldTitle = this.newBloGFlag ? null : this.title;
        var data = { title: title, content: content, oldTitle: oldTitle };
        this.httpService.post('/blog', JSON.stringify(data)).subscribe(function (response) {
            this.reloadBlogList();
            this.setTitle(response._body);
            this.getBlog('#myBlog');
        }.bind(this));
    };
    CurrentBlog.prototype.getBlog = function (elementSelector) {
        this.httpService.get('/blog/?title=' + this.title, null).subscribe(function (response) {
            this.setContent(JSON.parse(response._body).content);
            this.setBlogPanel(elementSelector, null);
        }.bind(this));
    };
    CurrentBlog = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _a) || Object, (typeof (_b = typeof CommentService_1.CommentService !== 'undefined' && CommentService_1.CommentService) === 'function' && _b) || Object])
    ], CurrentBlog);
    return CurrentBlog;
    var _a, _b;
})();
exports.CurrentBlog = CurrentBlog;
//# sourceMappingURL=currentBlog.js.map