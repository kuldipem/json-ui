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

```html
<html ng-app="json.ui">

<div class="json-ui">
      <form>
        <object class="root" id="ui-main">
        </object>
      </form>
</div>

<div class="button-area" ng-controller="jsonUIController as jsonUI">
        <button class="to-json-raw" ng-click="jsonUI.toRawJson()">></button>
        <button class="to-json-ui" ng-click="jsonUI.toJsonUI()"><</button>
</div>

<div class="raw_json">
    <div id="editor"></div>
</div>
```

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
