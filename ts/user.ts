/**
 * Created by rohitk on 04-Dec-15.
 */


import {Injectable} from 'angular2/core';
import {HttpService} from 'scripts/httpService';


@Injectable()
export class User {

    userObject = {username : "Guest" , loginFlag : true};

    constructor(public httpService : HttpService){}

    getUser(){
        this.httpService.get('/getusername', null).subscribe(function(data){
            let response = JSON.parse(data._body);
           // this.userObject.username = response.username;
            //this.userObject.loginFlag = response.loginFlag;
           this.userObject = {username : response.username, loginFlag : response.loginFlag};
        }.bind(this));
    }
}