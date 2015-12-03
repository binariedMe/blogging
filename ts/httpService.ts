/*
*
 * Created by rohitk on 27-Nov-15.
*/


import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_BINDINGS, Response} from 'angular2/http';

@Injectable()
export class HttpService{

    constructor(public http:Http){
    }

    get(url, data){
        if(data != null)
        return this.http.get(url, data);
        else return this.http.get(url);
    }
    post(url, data){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, data, { headers : headers});
    }
}
