/**
 * Created by rohitk on 30-Nov-15.
 */


/**
 * Created by rohitk on 12-Nov-15.
 */
import {Component, View, bootstrap, provide,FORM_PROVIDERS, NgClass} from 'angular2/angular2';
import {Http, Headers, HTTP_BINDINGS} from 'angular2/http';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {HttpService} from 'scripts/httpService';
import {login} from 'scripts/login';
import {register} from 'scripts/register';


@Component({
    selector : "my-auth"
})

@View({
    directives: [ROUTER_DIRECTIVES, NgClass],
    templateUrl : "views/authPanel.html"
})

@RouteConfig([
    { path: '/', as : "Login", component: login },
    { path: '/login', as : "Log-in", component: login },
    { path: '/register', as : "Register", component: register }
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


bootstrap(testClass, [HTTP_BINDINGS,HttpService,
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).then(
        success => console.log('App Bootstrapped!'),
        error => console.log(error)
);