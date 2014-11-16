(function(){
'use strict';

var jsonEditor = require("../js/editor")();
jsonEditor.getSession().on('change', watch);

var angular = require('angular');
require('angular-route');

var app = angular.module('json.ui', ['ngRoute']);

require("../js/services/object.services");
require("../js/directives/object.directive");

function watch() {
  var raw_json = jsonEditor.getJson();
  if(raw_json) {
     
  }
}
)();
