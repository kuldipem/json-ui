(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

  
angular.module('json.ui')
  .config(function (AppConfigProvider) {
    AppConfigProvider.set({
      //id: '#json-ui',
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFwcC9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbigpIHtcblxuICBcbmFuZ3VsYXIubW9kdWxlKCdqc29uLnVpJylcbiAgLmNvbmZpZyhmdW5jdGlvbiAoQXBwQ29uZmlnUHJvdmlkZXIpIHtcbiAgICBBcHBDb25maWdQcm92aWRlci5zZXQoe1xuICAgICAgLy9pZDogJyNqc29uLXVpJyxcbiAgICAgIGluaXRpYWxTeW5jIDogdHJ1ZVxuICAgIH0pO1xufSk7XG5cblxudmFyIGluaXRKc29uID0gIHtcbiAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiUm9iZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRmFtaWx5XCI6IFtcIkRhZFwiLCBcIk1vbVwiLCBcIlNpc3RlclwiLCBcIk1FXCJdLFxuICAgICAgICAgICAgICAgICAgICBcIkhvbWVcIjoge1wiQ291bnRyeVwiOiBcIlRhaXdhblwiLCBcIkNpdHlcIjogXCJUYWluYW5cIn1cbiAgICAgICAgICAgICAgICB9O1xuXG5lZGl0b3IuaW5pdChpbml0SnNvbik7XG5cbn0pKCk7XG4iXX0=
