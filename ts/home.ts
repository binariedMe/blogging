/**
 * Created by rohitk on 22-Nov-15.
 */

import {Component, View, bootstrap, provide, NgClass} from 'angular2/angular2';
import {EditorService} from 'scripts/editorService';
import {CurrentBlog} from 'scripts/currentBlog';
import {EditSettingPanel} from 'scripts/editSettingPanel';
import {CommentPanel} from 'scripts/CommentPanel';


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

}
