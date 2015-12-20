/**
 * Created by rohitk on 08-Dec-15.
 */



import {Injectable} from 'angular2/core';

@Injectable()
export class SocketFactory{
    socket = io();
    getSocketInstance(){
        return this.socket;
    }
}
