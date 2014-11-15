(function(){
  'use strict';

  module.exports = require('angular')
                   .module('json.ui')
                   .controller('FormController', formController);

  formController.$inject = ['$scope', '$element'];

  function formController($scope, $element) {
    
    this.addValue = addValue;
    this.addObject = addObject;
    this.addArray = addArray;
    this.updateInput = updateInput;

    function addValue(){
      var value = "<input type='text'></input>";
      $element.append(value);
    }

    function addObject(){
    
    }

    function addArray(){
    
    }

    function updateInput() {
    } 

  }

})();
