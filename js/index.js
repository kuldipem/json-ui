(function() {

  
angular.module('json.ui')
  .config(function (AppConfigProvider) {
    AppConfigProvider.set({
      id: '#json-ui',
      initialSync : true
    });
});


var initJson =  {
                    "Name": "Robert",
                    "Family": ["Dad", "Mom", "Sister", "ME"],
                    "Home": {"Country": "Taiwan", "City": "Tainan"}
                };

editor.init(initJson);

})();
