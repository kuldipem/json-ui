(function(){  

  module.exports = require('angular')
                   .module('json.ui')
                   .factory('objectService', objectService);

  objectService.$inject = ['$http'];

  function objectService($http) {
    this.getObject = getObject;

    function getObject() {
      return $http.get("views/object.html");
    }

    return this;
  }

})();
