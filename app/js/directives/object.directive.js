(function(){

  'use strict';

  module.export = require('angular')
                  .module('json.ui')
                  .directive('object', objectDirective);

  var jsonUIcontroller = require('../controllers/jsonUI.controller');

  function objectDirective() {
    var directive = {
        require: '?ngModel',
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'views/object.html',
        controller: jsonUIcontroller,
        controllerAs: 'jsonUI'
    };
    return directive;
  }
})();
