(function(){
'use strict';

var jsonEditor = require("../js/editor")();
jsonEditor.getSession().on('change', watch);

var angular = require('angular');
require('angular-route');

var app = angular.module('json.ui', ['ngRoute']);

require("../js/services/object.service");
require("../js/services/value.service");
require("../js/services/array.service");
require("../js/services/parser.service");
require("../js/directives/object.directive");
require("../js/directives/value.directive");
require("../js/directives/array.directive");
var jsonUIController = require("../js/controllers/jsonUI.controller");
app.controller('jsonUIController', jsonUIController);

function watch() {
  var raw_json = jsonEditor.getJson();
  if(raw_json) {
     
  }
}
})();
