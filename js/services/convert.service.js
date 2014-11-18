(function() {

  module.exports = require('angular')
                   .module('json.ui')
                   .service('convertService', convertService);

  function convertService() {

    this.toDocument = toDocument;

    function toDocument(rawJson, json) {

      var keyPrefix = "<key><input type='text' value='" 
      var keySuffix = "'></input></key><span>--</span>";
      var buttons =  "<button class='remove' ng-click='jsonUI.remove($event)'>-</button>"
                   + "<button class='add' ng-click='jsonUI.addObject($event)'>+</button>" 

      var valuePrefix = "<value><input type='text' value='"
      var valueSuffix = "'></input></value>";

      var keyReg = /"([^,:{}\[\]]*)"\s*:/g;
      var valueReg = /"([^,:{}\[\]]*)"/g;

      rawJson = rawJson.replace(keyReg, '<key-value>' + buttons + 
                                keyPrefix + '$1' + keySuffix );

      rawJson = rawJson.replace(valueReg, valuePrefix + '$1' +
                            valueSuffix);

      //rawJson = rawJson.replace(/[\[](.*),(.*)[\]]/g, '[$1' + ' ' + '$2]');
      //rawJson = rawJson.replace(/,/g , '</key-value>');
      rawJson = rawJson.replace(/{/g, "<object class='child'>");
      rawJson = rawJson.replace(/}/g, '</object>');
      rawJson = rawJson.replace(/\[/g, '<array>');
      rawJson = rawJson.replace(/\]/g, '</array>');
      rawJson = rawJson.replace(/[,]/g, '');


      return rawJson.substring(22, rawJson.length-10);;
    }

  }

})();

