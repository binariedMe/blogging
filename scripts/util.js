/**
 * Created by rohitk on 04-Dec-15.
 */
var Util = (function () {
    function Util() {
    }
    Util.prototype.getRandomInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return Util;
})();
exports.Util = Util;
//# sourceMappingURL=util.js.map