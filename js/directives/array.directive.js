(function(){

  'use strict';

  module.export = require('angular')
                  .module('json.ui')
                  .directive('array', arrayDirective);

  var jsonUIcontroller = require('../controllers/jsonUI.controller');

  function arrayDirective() {
    var directive = {
        require: '?ngModel',
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'views/array.html',
        controller: jsonUIcontroller,
        controllerAs: 'jsonUI'
    };
    return directive;
  }
})();
