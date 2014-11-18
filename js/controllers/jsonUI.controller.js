(function(){
  'use strict';

  module.exports = jsonUIcontroller;
  var jsonEditor = require("../editor")();

  function jsonUIcontroller($scope, $element, $compile, 
    objectService, valueService, arrayService, parserService) {

    var jsonValue;
    var jsonObject;
    var jsonKeyValue;
    var jsonArray;
    var element;

    this.addObject = addObject;
    this.appendElement = appendElement;
    this.remove = remove;
    this.toRawJson = toRawJson;

    getObject();
    getValue();
    getArray();

    function getObject() {
      objectService.getObject()
        .success(function (data) {
          jsonKeyValue = data;
          jsonObject =  '<object class="child json-wrap">'
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
          jsonArray =  '<array class="array-wrap">' + data + '</array>';
        })
        .error(function (error) {
          console.log(error);
        });
    }

    window.replace = function (sel) {

      var selectType = sel.value;
      var thisDOM = angular.element(sel);
      var scope = angular.element(sel).scope();

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

    function addObject($event) {
      var thisObject = angular.element($event.srcElement).parent();
      var el = $compile(jsonKeyValue)( $scope );
      thisObject.after(el);
    }

    function appendElement($event) {
      var thisElement = angular.element($event.srcElement).parent();
      var el = $compile(element)( $scope );
      thisElement.append(el);
    }

    function remove($event) {
      var thisElement = angular.element($event.srcElement).parent();
      var elementNumber = thisElement.parent().children().length;

      if(elementNumber === 1) {
        var propName = thisElement.prop("tagName");
        if(propName === 'KEY-VALUE') {
          var el = $compile(jsonKeyValue)( $scope );
          thisElement.after(el);
        }
        else {
          this.appendElement($event);
        }
      }
      thisElement.remove();
    }
  
    function toRawJson() {
      var uiScope = angular.element(document.querySelector('#main'));
      var rawJson = parserService.parseUI(uiScope);
      jsonEditor.setValue(rawJson);
    }

  }

})();
