/**
 * Created by rohitk on 11-Dec-15.
 */


import {Component, View, NgFor, NgClass, Pipe, PipeTransform, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/angular2';
import {HttpService} from 'scripts/httpService';
import {CurrentBlog} from 'scripts/currentBlog';
import {EditSettingPanel} from 'scripts/editSettingPanel';
import {SocketFactory} from 'scripts/SocketFactory';
import {CommentService} from 'scripts/CommentService';
import {User} from 'scripts/user';



@Pipe({
    name : 'dateFilter'
})
class DateFilter implements PipeTransform{
    transform(value : number, args : any[]){
        return new Date(value);
    }
}

@Component({
    selector : "comment-panel"
})

@View({
    pipes : [DateFilter],
    directives: [NgFor, NgClass, FORM_DIRECTIVES],
    templateUrl : "views/comment-panel.html"
})

export class CommentPanel{

    commentForm = new ControlGroup({
        comment : new Control()
    });

    constructor(public currentBlog : CurrentBlog,
                public httpService:HttpService,
                public socketFactory : SocketFactory,
                public commentService : CommentService,
                public user : User)
    {
        this.socketFactory.getSocketInstance().on('comment', function(data){
            let title = data.title;
            let comment = data.comment;
            if(title == this.currentBlog.title){
                this.commentService.getCommentList().push(data);
            }
        }.bind(this))

    }

    makeComment(){
        let comment = this.commentForm.controls.comment.value;
        if(this.user.userObject.loginFlag && comment)
        {
            this.socketFactory.getSocketInstance()
                .emit('postComment',{title: this.currentBlog.title, comment: comment, commentator: this.user.userObject.username});

            this.commentForm.controls.comment._value = "";
        }



    }

}
