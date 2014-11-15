(function(){

   module.exports = getEditor;

   function getEditor() {

     var editor = ace.edit("editor");
      
     editor.init = init;
     editor.watch = watch;
     editor.parseJson = parseJson;
     editor.getEditor = getEditor;
     editor.init();

     return editor;

     function init(){
        editor.getSession().setMode("ace/mode/json");
        editor.getSession().on('change', watch);
     }            

     function watch() {
       var raw_json = parseJson(editor.getValue());
       if(raw_json) {
       }
     }

     function parseJson(){
       try {
          return JSON.parse(raw_text);
       } catch (e) {
          return null;
       }
     }

     function getEditor() {
        return editor;   
     }
   }
})();
