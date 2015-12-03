/**
 * Created by rohitk on 23-Nov-15.
 */

import {Component, View, NgFor, NgClass} from 'angular2/angular2';
import {HttpService} from 'scripts/httpService';
import {CurrentBlog} from 'scripts/currentBlog';
import {EditSettingPanel} from 'scripts/editSettingPanel';



@Component({
    selector : "side-bar"
})

@View({
    directives: [NgFor, NgClass],
    templateUrl : "views/sidebar.html"
})

export class sidebar{

    constructor(public currentBlog : CurrentBlog, public httpService:HttpService, public editSettingPanel : EditSettingPanel){
        currentBlog.reloadBlogList();

    }

    loadBlog(blog){
        location.hash = "";
        this.currentBlog.setTitle(blog);
        this.currentBlog.getBlog('#myBlog');
        this.editSettingPanel.cancel();
    }

}
