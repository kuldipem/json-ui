(function(){
  'use strict';

  var jsonEditor = require("../js/editor")();
  jsonEditor.getSession().on('change', watch);
  
  var angular = require('angular');
  require('angular-route');

  angular.module('json.ui', ['ngRoute']);

  var formController = require('../js/controllers/form.controller');
  require("../js/directives/object.directive");
  
  function watch() {
    var raw_json = jsonEditor.getJson();
    if(raw_json) {
       
    }
  }


})();
