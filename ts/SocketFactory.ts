/**
 * Created by rohitk on 08-Dec-15.
 */



export class SocketFactory{
    socket = io();
    getSocketInstance(){
        return this.socket;
    }
}
