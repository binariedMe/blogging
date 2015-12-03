/**
 * Created by rohitk on 22-Nov-15.
 */


import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {sidebar} from 'scripts/sidebar';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
@Component({
    selector : "my-profile"
})

@View({
    directives : [sidebar],
    templateUrl : "views/binariedMe.html"
})

export class profile{
    Name;
    constructor(){
        this.Name = "Rohit Kumar";
    }
}
