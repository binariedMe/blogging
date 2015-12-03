/**
 * Created by rohitk on 30-Nov-15.
 */
import {Component, View, bootstrap, provide, NgClass, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import {HttpService} from 'scripts/httpService';
@Component({
    selector : "my-register"
})

@View({
    directives : [NgClass, RouterLink, FORM_DIRECTIVES],
    templateUrl : "views/register.html"
})

export class register {

    registerMessage;
    submitFlag;
    duplicateUsernameFlag = false;
    registerForm = new ControlGroup({
        username : new Control(),
        password : new Control(),
        confirmPassword : new Control(),
        agreementFlag : new Control(false)
    });

    constructor(public httpService: HttpService){

    }

    checkDuplicate(){
        var username = this.registerForm.controls.username.value;
        this.httpService.post('/checkduplicate', JSON.stringify({username: username}))
            .subscribe(function (data) {
                let response = JSON.parse(data._body);
                this.duplicateUsernameFlag = response.status;
            }.bind(this));
    }

    register(){
        this.submitFlag = true;

        let username = this.registerForm.controls.username.value;
        let password = this.registerForm.controls.password.value;
        let confirmPassword = this.registerForm.controls.confirmPassword.value;
        let agreementFlag = this.registerForm.controls.agreementFlag._value;
       // let passwordLengthFlag = this.registerForm.controls.password._value.length < 6;

        if(username && password && confirmPassword && agreementFlag && !this.duplicateUsernameFlag){
            this.httpService.post('/register', JSON.stringify({
                username: username,
                password: password
            })).subscribe(function (data) {
                let response = JSON.parse(data._body);
                if (response.status)
                    location.hash = "";
                //location.assign('/test/');
                else this.registerMessage = response.message;
            }.bind(this));
        }
    }
}