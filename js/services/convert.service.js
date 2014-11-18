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

      var keyPrefix = "<key><input type='text' value='" ;
      var keySuffix = "'></input></key><span>--</span>";
      var valuePrefix = "<value><input type='text' value='";
      var valueSuffix = "'></input></value>";

      var removeButton =  "<button class='remove' onclick='removeSelf(this)'>-</button>";
      var addObjButton = "<button class='add' onclick='addObject(this)'>+</button>" ;
      var appendEleButton = '<button class="add" onclick="appendElement(this)">+</button>';

      var keyReg = /"([^,:{}\[\]]*)"\s*:/g;
      var valueReg = /"([^,:{}\[\]]*)"/g;
      var objPrefixReg = /{/g;
      var objSuffixReg = /}/g;
      var arrayPrefixReg = /\[/g;
      var arraySuffixReg = /\]/g;
      var comma = /,/g;

      rawJson = rawJson.replace(keyReg, '<key-value>' + removeButton + addObjButton 
                                + keyPrefix + '$1' + keySuffix );

      rawJson = rawJson.replace(valueReg, valuePrefix 
                                +'$1' + valueSuffix);

      rawJson = rawJson.replace(/,\s*<key-value>/g, '</key-value><key-value>');
      rawJson = rawJson.replace(objPrefixReg, "<object class='child'>");
      rawJson = rawJson.replace(objSuffixReg, '</object>');
      rawJson = rawJson.replace(arrayPrefixReg, '<array><element>');
      rawJson = rawJson.replace(arraySuffixReg,  removeButton + appendEleButton + '</element></array>');
      rawJson = rawJson.replace(comma, '');

      return rawJson.substring(22, rawJson.length-10);;
    }

  }

})();

