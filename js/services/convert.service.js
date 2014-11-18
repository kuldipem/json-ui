(function() {

  module.exports = require('angular')
                   .module('json.ui')
                   .service('convertService', convertService);

  function convertService() {
    /* use string replace with regular expression to
     * convert the raw json to ui DOM foramt
     **/

    this.toDocument = toDocument;

    function toDocument(rawJson, json) {

      var keyPrefix = "<key><input type='text' value='" 
      var keySuffix = "'></input></key><span>--</span>";
      var removeButton =  "<button class='remove' onclick='removeSelf(this)'>-</button>";
      var addObjButton = "<button class='add' onclick='addObject(this)'>+</button>" 
      var appendEleButton = '<button class="add" onclick="appendElement(this)">+</button>'

      var valuePrefix = "<value><input type='text' value='"
      var valueSuffix = "'></input></value>";

      var keyReg = /"([^,:{}\[\]]*)"\s*:/g;
      var valueReg = /"([^,:{}\[\]]*)"/g;

      rawJson = rawJson.replace(keyReg, '<key-value>' + removeButton + addObjButton 
                                + keyPrefix + '$1' + keySuffix );

      rawJson = rawJson.replace(valueReg, valuePrefix 
                                +'$1' + valueSuffix);

      rawJson = rawJson.replace(/,\s*<key-value>/g , '</key-value><key-value>');
      rawJson = rawJson.replace(/{/g, "<object class='child'>");
      rawJson = rawJson.replace(/}/g, '</object>');
      rawJson = rawJson.replace(/\[/g, '<array><element>');
      rawJson = rawJson.replace(/\]/g,  removeButton + appendEleButton + '</element></array>');
      rawJson = rawJson.replace(/[,]/g, '');

      return rawJson.substring(22, rawJson.length-10);;
    }

  }

})();

