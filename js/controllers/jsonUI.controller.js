(function(){
  'use strict';

  module.exports = jsonUIcontroller;
  var jsonEditor = require("../editor")();

  function jsonUIcontroller($scope, $element, $compile, objectService, 
    valueService, arrayService, parserService, convertService) {

    var uiScope = angular.element(document.querySelector('#main'));
    var jsonValue;
    var jsonObject;
    var jsonKeyValue;
    var jsonArray;
    var element;

    this.toRawJson = toRawJson;
    this.toJsonUI = toJsonUI;
    window.removeSelf = removeSelf;
    window.replace = replace;
    window.addObject = addObject;
    window.appendElement = appendElement;

    getObject();
    getValue();
    getArray();

    function getObject() {
      objectService.getObject()
        .success(function (data) {
          jsonKeyValue = data;
          jsonObject =  '<object class="child">'
                              + data + '</object>';
        })
        .error(function (error) {
          console.log(error);
        });
    }

    function getValue() {
       valueService.getValue()
        .success(function (data) {
          jsonValue = '<value>' + data + '</value>';
        })
        .error(function (error) {
          console.log(error);
        });
    }

    function getArray() {
       arrayService.getArray()
        .success(function (data) {
          element = data;
          jsonArray =  '<array>' + data + '</array>';
        })
        .error(function (error) {
          console.log(error);
        });
    }

    function replace(sel) {

      var selectType = sel.value;
      var thisDOM = angular.element(sel);

      if(selectType === 'value') {
        thisDOM.after(jsonValue);
      }
      else if(selectType === 'array') {
        var el = $compile(jsonArray)( $scope );
        thisDOM.after(el);
      }
      else if(selectType === 'object') {
        var el = $compile(jsonObject)( $scope );
        thisDOM.after(el);
      }
      thisDOM.remove();
    }

    function addObject(thisElement) {
      var thisObject  = angular.element(thisElement).parent();
      thisObject.after(jsonKeyValue);
    }

    function appendElement(thisElement) {
      var thisObject = angular.element(thisElement).parent();
      thisObject.append(element);
    }

    function removeSelf(thisElement) {
      var thisObject = angular.element(thisElement).parent();
      var elementNumber = thisObject.parent().children().length;

      if(elementNumber === 1) {
        var propName = thisObject.prop("tagName");
        if(propName === 'KEY-VALUE') {
          thisObject.after(jsonKeyValue);
        }
        else {
          appendElement(thisObject);
        }
      }
      thisObject.remove();
    }
  
    function toRawJson() {
      var rawJson = parserService.parseUI(uiScope);
      jsonEditor.setValue(rawJson);
    }

    function toJsonUI() {
      var rawJson = jsonEditor.getValue();
      var json = jsonEditor.getJson(rawJson);

      if(json) {
        var jsonDOM = convertService.toDocument(rawJson, json);
        uiScope.empty();
        console.log(jsonDOM);
        uiScope.append(jsonDOM);
      }
    }
  }

})();
