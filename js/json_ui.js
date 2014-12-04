(function(){
'use strict';

var angular = require('angular');
require('angular-route');

var jsonUIController = require("../js/controllers/jsonUI.controller");

var app = angular.module('json.ui', ['ngRoute'])
                 .controller('jsonUIController', jsonUIController);

app.config(init);
app.provider('AppConfig', AppConfig);

init.$inject = ['$compileProvider'];

function init($compileProvider) {   
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
}

function AppConfig() {
  var _opt = {}
  return {
    set: function (settings) {
      _opt = settings;
    },
    $get: function () {
      return _opt;
    }
  };
}

require("../js/services/object.service");
require("../js/services/value.service");
require("../js/services/array.service");
require("../js/services/parser.service");
require("../js/services/convert.service");
require("../js/directives/object.directive");
require("../js/directives/value.directive");
require("../js/directives/array.directive");
require("../js/editor")();


})();
