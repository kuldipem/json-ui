(function(){

  'use strict';

  module.export = require('angular')
                  .module('json.ui')
                  .directive('object', objectDirective);

  function objectDirective() {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/object.html',
        controller: inputsController,
        controllerAs: 'input'
    };
    return directive;
  }

  function inputsController() {
  }

})();
