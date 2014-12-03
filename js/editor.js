(function(){

   module.exports = getEditor;

   function getEditor() {

     var editor = ace.edit("editor");
      
     editor.init = init;
     editor.getJson = getJson;
     editor.init();

     return editor;

     function init(){
        var initJson =  {
                          "Name": "Robert",
                          "Family": ["Dad", "Mom", "Sister", "ME"],
                          "Home": {"Country": "Taiwan", "City": "Tainan"}
                        };
        editor.getSession().setMode("ace/mode/json");
        editor.setValue(JSON.stringify(initJson, null, 4));
     }            

     function getJson(raw){
       try {
          return JSON.parse(raw);
       } catch (e) {
          alert('Error: invaild json format');
          return null;
       }
     }

   }
})();
