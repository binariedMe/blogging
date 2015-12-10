/**
 * Created by rohitk on 08-Dec-15.
 */
var SocketTest = (function () {
    function SocketTest() {
        this.socket = io();
    }
    SocketTest.prototype.getSocketInstance = function () {
        return this.socket;
    };
    return SocketTest;
})();
exports.SocketTest = SocketTest;
//# sourceMappingURL=comment-socket.js.map