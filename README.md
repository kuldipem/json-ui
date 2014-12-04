# json-ui

Json in editing in friendly UIs.

## require
+ Install nodejs
+ Install npm

## Usage

get js from `./dist/json_ui.js`, css from `./app/css/json_ui.css` and all views from `app/views`

### Including files: 

```html
<link rel="stylesheet" href="./css/json_ui.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js" type="text/javascript" charset="utf-8"></script>
<script src="./js/json_ui.js"></script>
```

### HTML structure

**Set json-ui in page**

```html
<html ng-app="json.ui">
<body ng-controller="jsonUIController as jsonUI">

<div class="json-ui">
      <form>
        <object class="root" id="json-wrap" ng-init="jsonUI.init()">
        </object>
      </form>
</div>
```
**Set raw json editor in page**

```html
<div class="raw_json">
    <div id="editor"></div>
</div>
```

**Set json-ui <-> raw-json buttons in page**

```html
<div class="button-area" ng-controller="jsonUIController as jsonUI">
        <button class="to-json-raw" ng-click="jsonUI.toRawJson()">></button>
        <button class="to-json-ui" ng-click="jsonUI.toJsonUI()"><</button>
</div>
```

**Set export json link**

```html
 <a ng-href="{{jsonUI.jsonLink}}" download="jsonui.json" ng-click="jsonUI.getDownloadLink()">Export</a>
```

### Initialization

**Initialize Raw Json**

```json
var initJson =  {
                   "Name": "Robert",
                   "Family": ["Dad", "Mom", "Sister", "ME"],
                   "Home": {"Country": "Taiwan", "City": "Tainan"}
                };

editor.init(initJson);
```

**Initialize json-ui**

Default Initialization

```javascript
angular.module('json.ui')
  .config(function (AppConfigProvider) {
    AppConfigProvider.set({});
});
```
Alter options

```javascript
angular.module('json.ui')
  .config(function (AppConfigProvider) {
    AppConfigProvider.set({
      initialSync : true
    });
});
```

###Options

| Options         | value       | default             | explain                                   |example|
|-----------------|--------------|---------------------|--------------------------------------------|--------------------------------------------|
| initialSync | true / false | false               | true: Json-ui and Raw json synchronization when page load ||

## Develop

First run the following command (installing bower `npm install -g bower`)

    $ bower install

start server (you should install `npm install http-server -g` first)

    $ npm start

open the browser and type this [http://localhost:8000/app/](http://localhost:8000/app/)

## compile scss file & js file

We are using browserify so you should install browserify in global first ( npm install -g browserify ).

    $ npm install
    $ gulp

## deploy

    $ ./deploy
