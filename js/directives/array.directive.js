(function(){

  'use strict';

  module.export = require('angular')
                  .module('json.ui')
                  .directive('array', arrayDirective);

  function arrayDirective() {
    var directive = {
        require: '?ngModel',
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'views/array.html'
    };
    return directive;
  }
})();
