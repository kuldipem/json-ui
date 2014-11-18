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

    this.addObject = addObject;
    this.appendElement = appendElement;
    this.remove = remove;
    this.toRawJson = toRawJson;
    this.toJsonUI = toJsonUI;

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

    window.replace = function (sel) {

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
      var rawJson = parserService.parseUI(uiScope);
      jsonEditor.setValue(rawJson);
    }

    function toJsonUI() {
      var rawJson = jsonEditor.getValue();
      var json = jsonEditor.getJson(rawJson);

      if(json) {
        var jsonDOM = convertService.toDocument(rawJson, json);
        uiScope.empty();
        //$scope.count ++;
        //var el = $compile(jsonDOM)( $scope );
        console.log(jsonDOM);
        uiScope.append(jsonDOM);
      }
    }
  }

})();
