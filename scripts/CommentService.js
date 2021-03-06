/**
 * Created by rohitk on 11-Dec-15.
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
var core_1 = require('angular2/core');
var httpService_1 = require('scripts/httpService');
var CommentService = (function () {
    function CommentService(httpService) {
        this.httpService = httpService;
    }
    CommentService.prototype.getCommentList = function () {
        if (this.commentList == undefined)
            this.commentList = [];
        return this.commentList;
    };
    CommentService.prototype.loadCommentList = function (title) {
        this.httpService.post('/getcomments', JSON.stringify({ title: title })).subscribe(function (data) {
            var list = JSON.parse(data._body);
            this.commentList = list.comments;
        }.bind(this));
    };
    CommentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _a) || Object])
    ], CommentService);
    return CommentService;
    var _a;
})();
exports.CommentService = CommentService;
//# sourceMappingURL=CommentService.js.map