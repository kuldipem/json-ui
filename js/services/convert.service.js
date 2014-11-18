(function() {

  module.exports = require('angular')
                   .module('json.ui')
                   .service('convertService', convertService);

  function convertService() {

    this.toDocument = toDocument;

    function toDocument(rawJson, json) {
      console.log(rawJson);

      var keyPrefix = "<key><input type='text' value='" 
      var keySuffix = "'></input></key><span>--</span>";
      var buttons =  "<button class='remove' ng-click='jsonUI.remove($event)'>-</button>"
                   + "<button class='add' ng-click='jsonUI.addObject($event)'>+</button>" 

      var valuePrefix = "<value><input type='text' value='"
      var valueSuffix = "'></input></value>";

      var keyReg = /"([^:{}]*)"\s*:/g;
      var valueReg = /"(.*)"/g;

      rawJson = rawJson.replace(/[,|\s]/g, '');
      rawJson = rawJson.replace(keyReg, '<key-value>'+ buttons + 
                                keyPrefix + '$1' + keySuffix );

      rawJson = rawJson.replace(valueReg, valuePrefix + '$1' +
                            valueSuffix + '</key-value>');

      rawJson = rawJson.replace(/{/g, "<object class='child'>");
      rawJson = rawJson.replace(/}/g, '</object>');
      rawJson = rawJson.replace(/\[/g, '<array>');
      rawJson = rawJson.replace(/\]/g, '</array>');


      return rawJson.substring(22, rawJson.length-9);;
    }

  }

})();

