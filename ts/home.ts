/**
 * Created by rohitk on 22-Nov-15.
 */

import {Component, View, bootstrap, provide, NgClass} from 'angular2/angular2';
import {EditorService} from 'scripts/editorService';
import {CurrentBlog} from 'scripts/currentBlog';
import {EditSettingPanel} from 'scripts/editSettingPanel';


@Component({
    selector : "my-home"
})

@View({
    directives : [NgClass, EditSettingPanel],
    styles: ['.hidden{ display : none} .visible{ display : block}'],
    templateUrl : "views/blog-panel.html"
})

export class home {
    constructor(public  editorService:EditorService, public currentBlog : CurrentBlog){
       /* if(this.currentBlog.title == null)
            this.currentBlog.setTitle("javascript is awesome");*/
        this.currentBlog.getBlog('#myBlog');
        $('#titlePan').hide();
    }
/*
    constructor(public  editorService:EditorService, public currentBlog : CurrentBlog) {

        if(this.currentBlog.title == null)
            this.currentBlog.setTitle("javascript is awesome");
        this.currentBlog.getBlog('#myBlog');
        $('#titlePan').hide();
    }

    new(){
        this.currentBlog.setNewBlogFlag(true);
        $('#titlePan').show();
        $('#myBlog').html("");
        this.editorService.showEditor('#summernote');
    }

    edit() {
        this.currentBlog.setNewBlogFlag(false);
        $("#title").val(this.currentBlog.title);
        $('#titlePan').show();
        $('#myBlog').html("");
        this.editorService.showEditor('#summernote');
        $('#summernote').code(this.currentBlog.content);
    }

    cancel() {
        $("#title").val("");
        $('#summernote').code("");
        $('#titlePan').hide();
        this.currentBlog.setBlogPanel('#myBlog', null);
        this.editorService.removeEditor('#summernote');
    }

    save() {
       let data = this.editorService.saveEdits('#summernote');
        this.currentBlog.saveBlog($('#title').val(), data);
        $("#title").val("");
        $('#titlePan').hide();
    }*/
}
