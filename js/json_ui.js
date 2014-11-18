(function(){
'use strict';

var angular = require('angular');
require('angular-route');

var jsonUIController = require("../js/controllers/jsonUI.controller");

var app = angular.module('json.ui', ['ngRoute'])
                 .controller('jsonUIController', jsonUIController);

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
