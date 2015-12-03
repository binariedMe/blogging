/**
 * Created by rohitk on 26-Nov-15.
 */
var EditorService = (function () {
    function EditorService() {
    }
    EditorService.prototype.showEditor = function (elementSelector) {
        try {
            $(elementSelector).summernote({ height: 600 });
        }
        catch (err) {
        }
    };
    EditorService.prototype.removeEditor = function (elementSelector) {
        try {
            $(elementSelector).destroy();
            $(elementSelector).html("");
        }
        catch (err) {
        }
    };
    EditorService.prototype.saveEdits = function (elementSelector) {
        try {
            var data = $(elementSelector).code();
            this.removeEditor(elementSelector);
            return data;
        }
        catch (err) {
        }
    };
    return EditorService;
})();
exports.EditorService = EditorService;
//# sourceMappingURL=editorService.js.map