(function(){
  'use strict';

  module.exports = formController;

  function formController($scope, $element, $compile, objectService) {

    var jsonValue = '<input type="text"></input>';
    var jsonChildObject = null;
    var jsonSiblingObject = null;

    this.addObject = addObject;
    this.updateInput = updateInput;

    getObject();

    function getObject(){
      objectService.getObject()
        .success(function (data) {
          jsonSiblingObject = '<object class="sibling">' + data + '</object>';
          jsonChildObject =  '<object class="child">' + data + '</object>';
        })
        .error(function (error) {
          console.log(error);
        });
    }

    function updateInput() {
    }

    window.replace = function (sel) {

      var selectType = sel.value;
      var thisDOM = angular.element(sel);
      var scope = angular.element(sel).scope();

      if(selectType === 'value') {
        thisDOM.after(jsonValue);
      }
      else if(selectType === 'array') {
      }
      else if(selectType === 'object') {
        var el = $compile('<div class="json-wrap">'
                          + jsonSiblingObject + '</div>')( $scope );
        thisDOM.after(el);
      }
      thisDOM.remove();
    }

    function addObject($event) {
      var thisObject = angular.element($event.srcElement).parent();
      var el = $compile(jsonSiblingObject)( $scope );
      thisObject.after(el);
    }

    function updateInput() {
    }
  }

})();
