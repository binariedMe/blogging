/**
 * Created by rohitk on 27-Nov-15.
 */

import {Injectable} from 'angular2/core';
import {HttpService} from 'scripts/httpService';
import {CommentService} from 'scripts/CommentService';

@Injectable()
export class CurrentBlog{

    constructor(public httpService:HttpService, public commentService : CommentService){

    }
    title;
    setTitle(title){
        this.title = title;
        this.commentService.loadCommentList(title);
    }
    content;
    setContent(data){
        this.content = data;
    }

    newBloGFlag;
    setNewBlogFlag(flag){
        this.newBloGFlag = flag;
    }

    blogList;
    reloadBlogList(){
        this.httpService.get('/getTitles', null).subscribe(function(response){
            let list = JSON.parse(response._body);
            this.blogList =list.list;
            if(this.title == null)
            this.setTitle(this.blogList[0]);
        }.bind(this));
    }

    setBlogPanel(elementSelector, data){
        if(data != null){
            $(elementSelector).html("");
            $(elementSelector).append("<h2>" + this.title + "</h2>");
            $(elementSelector).append(data);
        }
        else {
            $(elementSelector).html("");
            $(elementSelector).append("<h2>" + this.title + "</h2>");
            $(elementSelector).append(this.content);
        }
    }
    saveBlog(title, content){

        let oldTitle = this.newBloGFlag? null : this.title;
        var data = { title : title , content : content, oldTitle : oldTitle};
        this.httpService.post('/blog', JSON.stringify(data)).subscribe( function(response){
            this.reloadBlogList();
            this.setTitle(response._body);
            this.getBlog('#myBlog');

        }.bind(this));

    }
    getBlog(elementSelector){
        this.httpService.get('/blog/?title='+ this.title, null).subscribe(function(response){
            this.setContent(JSON.parse(response._body).content);
            this.setBlogPanel(elementSelector, null);
        }.bind(this));
    }




}