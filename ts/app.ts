/**
 * Created by rohitk on 12-Nov-15.
 */
import {Component, View, bootstrap, provide,FORM_PROVIDERS, NgClass} from 'angular2/angular2';
import {Http, Headers, HTTP_BINDINGS} from 'angular2/http';
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink } from 'angular2/router';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {sidebar} from 'scripts/sidebar';
import {home} from 'scripts/home';
import {profile} from 'scripts/profile';
import {EditorService} from 'scripts/editorService';
import {CurrentBlog} from 'scripts/currentBlog';
import {HttpService} from 'scripts/httpService';
import {EditSettingPanel} from 'scripts/editSettingPanel';



@Component({
    selector : "my-app"
})

@View({
    directives: [ROUTER_DIRECTIVES, NgClass, sidebar, EditSettingPanel],
    templateUrl : "views/app.html"
})

@RouteConfig([
    { path: '/', as : "Home", component: home },
    { path: '/binariedMe', as : "Myprofile", component: profile }
])

class testClass{
    tabs;
    constructor(){
        this.tabs = [{'Home' : 'active', 'Myprofile' : ''}];
        this.activateMe("Home");
    }
    activateMe(tab){
        this.tabs = [{'Home' : '', 'Myprofile' : ''}];
        this.tabs[tab] = 'active';
    }

}


bootstrap(testClass, [HTTP_BINDINGS,EditorService,CurrentBlog,HttpService,EditSettingPanel,
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).then(
        success => console.log('App Bootstrapped!'),
        error => console.log(error)
);