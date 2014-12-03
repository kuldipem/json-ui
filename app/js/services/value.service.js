(function(){  

  module.exports = require('angular')
                   .module('json.ui')
                   .factory('valueService', valueService);

  valueService.$inject = ['$http'];

  function valueService($http) {
    this.getValue = getValue;

    function getValue() {
      return $http.get("views/value.html");
    }

    return this;
  }

})();
