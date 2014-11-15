(function(){

   module.exports = getEditor;

   function getEditor() {

     var editor = ace.edit("editor");
      
     editor.init = init;
     editor.watch = watch;
     editor.parseJson = parseJson;
     editor.init();

     return editor;

     function init(){
        editor.getSession().setMode("ace/mode/json");
        editor.getSession().on('change', watch);
     }            

     function watch() {
       var raw_json = parseJson(editor.getValue());
       if(raw_json) {
         // update json_ui
       }
     }

     function parseJson(raw){
       try {
          return JSON.parse(raw);
       } catch (e) {
          return null;
       }
     }

   }
})();
