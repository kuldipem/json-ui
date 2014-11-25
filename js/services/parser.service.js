(function() {

  module.exports = require('angular')
                   .module('json.ui')
                   .service('parserService', parserService);

  function parserService() {

    this.parseUI = parseUI;
    var key = null;
    var prevKey = null;
    var acceptTag = ['OBJECT', 'VALUE', 'ARRAY', 
                    'KEY', 'KEY-VALUE', 'ELEMENT'];
    var valid = true;

    function parseUI(uiScope) {
      var jsonElement = {}
      var tag = {};
      valid = true;

      tag.isArray = false;
      traverse(uiScope, jsonElement, tag);

      return JSON.stringify(jsonElement, null, 4);
    }

    function traverse(node, jsonElement, tag) {
      var children = node.children();

      for(var i = 0; i < children.length; ++i) {
        var child = jqlite(children[i]);
        var tagName = child.prop("tagName");

        if(acceptTag.indexOf(tagName) >= 0) {

          addElement(jsonElement, child, tag);

          if (!valid) { 
            return;
          }
          traverseWithTag(tagName, child, jsonElement, tag);
        }
      }
    }
    
    function traverseWithTag(tagName, child, jsonElement, tag) {

      switch (tagName) {
        case 'ARRAY':
          tag.isArray = true;
          traverse(child, jsonElement[key], angular.copy(tag));
          tag.isArray = false;
          break;
        case 'OBJECT':
          if(tag.isArray) {
            tag.isArray = false;
            traverse(child, jsonElement[jsonElement.length-1], angular.copy(tag));
            tag.isArray = true;
          }
          else {
            traverse(child, jsonElement[key], angular.copy(tag));
          }
          break;
        default:
          traverse(child, jsonElement, angular.copy(tag));
      }
    }

    function addElement(currObj, node, tag) {
      var propName = node.prop("tagName");
      var children = node.children();

      switch (propName) {
        case 'KEY':
          key = jqlite(children).val();
          if(key in currObj) {
            alert('Error: key cannot be the same.');
            valid = false;
          }
          currObj[key] = null;
          break;
        case 'VALUE':
          var value = jqlite(children).val();
          if(tag.isArray) { 
            currObj.push(value);
          }
          else {
            currObj[key] = value;
          }
          break;
        case 'OBJECT':
          if(tag.isArray) {
            currObj.push({});
          }
          else{
            currObj[key] = {};
          }
          break;
        case 'ARRAY':
          currObj[key] = [];
      }
    }

    
    function jqlite(e) {
      return angular.element(e);
    }

    return this;
  }

})();
