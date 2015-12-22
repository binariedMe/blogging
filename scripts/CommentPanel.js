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
var angular2_1 = require('angular2/angular2');
var httpService_1 = require('scripts/httpService');
var currentBlog_1 = require('scripts/currentBlog');
var SocketFactory_1 = require('scripts/SocketFactory');
var CommentService_1 = require('scripts/CommentService');
var user_1 = require('scripts/user');
var DateFilter = (function () {
    function DateFilter() {
    }
    DateFilter.prototype.transform = function (value, args) {
        return new Date(value);
    };
    DateFilter = __decorate([
        angular2_1.Pipe({
            name: 'dateFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], DateFilter);
    return DateFilter;
})();
var CommentPanel = (function () {
    function CommentPanel(currentBlog, httpService, socketFactory, commentService, user) {
        this.currentBlog = currentBlog;
        this.httpService = httpService;
        this.socketFactory = socketFactory;
        this.commentService = commentService;
        this.user = user;
        this.commentForm = new angular2_1.ControlGroup({
            comment: new angular2_1.Control()
        });
        this.socketFactory.getSocketInstance().on('comment', function (data) {
            var title = data.title;
            var comment = data.comment;
            if (title == this.currentBlog.title) {
                this.commentService.getCommentList().push(data);
            }
        }.bind(this));
    }
    CommentPanel.prototype.makeComment = function () {
        var comment = this.commentForm.controls.comment.value;
        if (this.user.userObject.loginFlag && comment) {
            this.socketFactory.getSocketInstance()
                .emit('postComment', { title: this.currentBlog.title, comment: comment, commentator: this.user.userObject.username });
            this.commentForm.controls.comment._value = "";
        }
    };
    CommentPanel = __decorate([
        angular2_1.Component({
            selector: "comment-panel"
        }),
        angular2_1.View({
            pipes: [DateFilter],
            directives: [angular2_1.NgFor, angular2_1.NgClass, angular2_1.FORM_DIRECTIVES],
            templateUrl: "views/comment-panel.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof currentBlog_1.CurrentBlog !== 'undefined' && currentBlog_1.CurrentBlog) === 'function' && _a) || Object, (typeof (_b = typeof httpService_1.HttpService !== 'undefined' && httpService_1.HttpService) === 'function' && _b) || Object, (typeof (_c = typeof SocketFactory_1.SocketFactory !== 'undefined' && SocketFactory_1.SocketFactory) === 'function' && _c) || Object, (typeof (_d = typeof CommentService_1.CommentService !== 'undefined' && CommentService_1.CommentService) === 'function' && _d) || Object, (typeof (_e = typeof user_1.User !== 'undefined' && user_1.User) === 'function' && _e) || Object])
    ], CommentPanel);
    return CommentPanel;
    var _a, _b, _c, _d, _e;
})();
exports.CommentPanel = CommentPanel;
//# sourceMappingURL=CommentPanel.js.map