(function(){

  'use strict';

  module.export = require('angular')
                  .module('json.ui')
                  .directive('object', objectDirective);

  var formController = require('../controllers/form.controller');

  function objectDirective() {
    var directive = {
        require: '?ngModel',
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'views/object.html',
        controller: formController,
        controllerAs: 'json'
    };
    return directive;
  }
})();
