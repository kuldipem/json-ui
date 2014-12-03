(function(){  

  module.exports = require('angular')
                   .module('json.ui')
                   .factory('arrayService', arrayService);

  arrayService.$inject = ['$http'];

  function arrayService($http) {
    this.getArray = getArray;

    function getArray() {
      return $http.get("views/array.html");
    }

    return this;
  }

})();
