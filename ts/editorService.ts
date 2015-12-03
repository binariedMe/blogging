/**
 * Created by rohitk on 26-Nov-15.
 */



export class EditorService {

    showEditor(elementSelector){
        try{
            $(elementSelector).summernote({height : 600});
        }catch(err){
            // Do Nothing
        }
    }
    removeEditor(elementSelector){
        try{
            $(elementSelector).destroy();
            $(elementSelector).html("");
        }catch(err){
            // Do Nothing
        }
    }
    saveEdits(elementSelector){
        try{
            var data = $(elementSelector).code();
            this.removeEditor(elementSelector);
            return data;
           // $(panelSelector).append(data);
        }catch(err){

        }
    }

}