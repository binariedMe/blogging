/**
 * Created by rohitk on 30-Nov-15.
 */

import {Component, View, bootstrap, provide, NgClass, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import {HttpService} from 'scripts/httpService';

@Component({
    selector : "my-login"
})

@View({
    directives : [NgClass, RouterLink, FORM_DIRECTIVES],
    templateUrl : "views/login.html"
})

export class login {

    loginMessage = null;
    submitFlag = false;
    loginForm = new ControlGroup({
        username : new Control(),
        password : new Control()
    });
    constructor(public httpService: HttpService){

    }

    login(){
        this.submitFlag = true;
        let username = this.loginForm.controls.username.value;
        let password = this.loginForm.controls.password.value;
        if(username && password) {
            this.httpService.post('/login', JSON.stringify({
                username: username,
                password: password
            })).subscribe(function (data) {
                let response = JSON.parse(data._body);
                if (response.status)
                    location.pathname = "/test";
                //location.assign('/test/');
                else this.loginMessage = response.message;
            }.bind(this));

        }
    }

}