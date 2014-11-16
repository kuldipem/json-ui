(function(){

  'use strict';

  module.export = require('angular')
                  .module('json.ui')
                  .directive('value', valueDirective);

  function valueDirective() {
    var directive = {
        require: '?ngModel',
        restrict: 'E',
        scope: {
          ngModel: '='
        },
        templateUrl: 'views/value.html'
    };
    return directive;
  }
})();
