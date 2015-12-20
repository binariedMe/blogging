/**
 * Created by rohitk on 11-Dec-15.
 */



import {Injectable} from 'angular2/core';
import {HttpService} from 'scripts/httpService';

@Injectable()
export class CommentService{

    commentList;
    constructor(public httpService : HttpService){
    }
    getCommentList(){
        if(this.commentList == undefined)
            this.commentList = [];
        return this.commentList;
    }
    loadCommentList(title){
        this.httpService.post('/getcomments', JSON.stringify({title : title})).subscribe(function(data){
            let list = JSON.parse(data._body);
            this.commentList = list.comments;
        }.bind(this));
    }

}