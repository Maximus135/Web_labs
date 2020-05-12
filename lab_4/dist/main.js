/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/about.css":
/*!***********************!*\
  !*** ./css/about.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./about.css */ \"./node_modules/css-loader/dist/cjs.js!./css/about.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/about.css?");

/***/ }),

/***/ "./css/home.css":
/*!**********************!*\
  !*** ./css/home.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./css/home.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/home.css?");

/***/ }),

/***/ "./js/CreatePokemonPage.js":
/*!*********************************!*\
  !*** ./js/CreatePokemonPage.js ***!
  \*********************************/
/*! exports provided: fetchPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPokemon\", function() { return fetchPokemon; });\nconst fetchPokemon = async () => {\r\n  let number = 1 + Math.random () * 233; // получить рандомного покемона\r\n  number = Math.floor (number);\r\n  const ability_url = 'https://pokeapi.co/api/v2/ability/' + number;\r\n  let effect = await fetch (ability_url)\r\n    .then (res => res.json ())\r\n    .then (data => {\r\n      return data.effect_entries[0].effect; // получить эфект покемона\r\n    });\r\n\r\n  const name_url = 'https://pokeapi.co/api/v2/pokemon/' + number;\r\n\r\n  let {name, sprites} = await fetch (name_url)\r\n    .then (res => res.json ())\r\n    .then (data => {\r\n      return data; // получить имя покемона\r\n    });\r\n\r\n  let img = sprites.front_default;\r\n\r\n  // let name = await fetch (name_url).then (res => res.json ()).then (data => {\r\n  //   return data.name; // получить имя покемона\r\n  // });\r\n\r\n  // let img = await fetch (name_url).then (res => res.json ()).then (data => {\r\n  //   return data.sprites.front_default; // получить фото покемона\r\n  // });\r\n\r\n  //console.log (img);\r\n  document.getElementById ('name').innerHTML = name;\r\n  let img_html = document.getElementById ('photo');\r\n  img_html.src = img;\r\n  document.getElementById ('efffect').innerHTML = effect;\r\n};\r\n\r\nif (window.location.hash === '#about') {\r\n  fetchPokemon ();\r\n}\r\n\n\n//# sourceURL=webpack:///./js/CreatePokemonPage.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ \"./js/route.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./js/router.js\");\n/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/about.css */ \"./css/about.css\");\n/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_about_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/home.css */ \"./css/home.css\");\n/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_home_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\n(function () {\r\n  function init () {\r\n    let router = new _router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"] ([\r\n      new _route__WEBPACK_IMPORTED_MODULE_0__[\"Route\"] ('home', 'home.html', true),\r\n      new _route__WEBPACK_IMPORTED_MODULE_0__[\"Route\"] ('about', 'about.html'),\r\n    ]);\r\n  }\r\n  init ();\r\n}) ();\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/route.js":
/*!*********************!*\
  !*** ./js/route.js ***!
  \*********************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Route\", function() { return Route; });\n'use stict';\r\n\r\nfunction Route (name, htmlName, defaultRoute) {\r\n  try {\r\n    if (!name || !htmlName) {\r\n      throw 'error: name and htmlName params are mandatories';\r\n    }\r\n    this.constructor (name, htmlName, defaultRoute);\r\n  } catch (e) {\r\n    console.error (e);\r\n  }\r\n}\r\n\r\nRoute.prototype = {\r\n  constructor: function (name, htmlName, defaultRoute) {\r\n    this.name = name;\r\n    this.htmlName = htmlName;\r\n    this.default = defaultRoute;\r\n  },\r\n  isActiveRoute: function (hashedPath) {\r\n    return hashedPath.replace ('#', '') === this.name;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./js/route.js?");

/***/ }),

/***/ "./js/router.js":
/*!**********************!*\
  !*** ./js/router.js ***!
  \**********************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return Router; });\n/* harmony import */ var _CreatePokemonPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePokemonPage */ \"./js/CreatePokemonPage.js\");\n\r\n\r\n\r\nfunction Router (routes) {\r\n  try {\r\n    if (!routes) {\r\n      throw 'error: routes param is mandatory';\r\n    }\r\n    this.constructor (routes);\r\n    this.init ();\r\n  } catch (e) {\r\n    console.error (e);\r\n  }\r\n}\r\n// 123 123 123\r\nRouter.prototype = {\r\n  constructor: function (routes) {\r\n    this.routes = routes;\r\n    this.rootElem = document.getElementById ('app');\r\n  },\r\n  init: function () {\r\n    let r = this.routes;\r\n    (function (scope, r) {\r\n      window.addEventListener ('hashchange', function (e) {\r\n        scope.hasChanged (scope, r);\r\n      });\r\n    }) (this, r);\r\n    this.hasChanged (this, r);\r\n  },\r\n  hasChanged: function (scope, r) {\r\n    if (window.location.hash.length > 0) {\r\n      for (let i = 0, length = r.length; i < length; i++) {\r\n        let route = r[i];\r\n        if (route.isActiveRoute (window.location.hash.substr (1))) {\r\n          scope.goToRoute (route.htmlName);\r\n        }\r\n      }\r\n    } else {\r\n      for (let i = 0, length = r.length; i < length; i++) {\r\n        let route = r[i];\r\n        if (route.default) {\r\n          scope.goToRoute (route.htmlName);\r\n        }\r\n      }\r\n    }\r\n  },\r\n  goToRoute: function (htmlName) {\r\n    (function (scope) {\r\n      let url = 'views/' + htmlName;\r\n      let xhttp = new XMLHttpRequest ();\r\n      xhttp.onreadystatechange = function () {\r\n        if (this.readyState === 4 && this.status === 200) {\r\n          scope.rootElem.innerHTML = this.responseText;\r\n        }\r\n      };\r\n      xhttp.open ('GET', url, true);\r\n      xhttp.send ();\r\n      if (window.location.hash === '#about') {\r\n        Object(_CreatePokemonPage__WEBPACK_IMPORTED_MODULE_0__[\"fetchPokemon\"]) ();\r\n      }\r\n    }) (this);\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./js/router.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/about.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/about.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);\"]);\n// Module\nexports.push([module.i, \".wrap{\\r\\n    min-width: 500px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.wrap .line_menu {\\r\\n    display: flex;\\r\\n    min-width: 500px;\\r\\n    flex-direction: row;\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    height: 80px;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    top: 0;\\r\\n    background-color: rgb(132, 172, 218);\\r\\n}\\r\\n\\r\\n.wrap .line_menu .logo {\\r\\n    display: block;\\r\\n    width: 150px;\\r\\n    height: 80px;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n\\r\\n.wrap .line_menu .main_but {\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    font-size: 40px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    right: 20px;\\r\\n    left: auto;\\r\\n    margin-top: 15px;\\r\\n    text-decoration: none;\\r\\n    color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.wrap .line_menu .main_but:hover {\\r\\n    color: rgb(230, 93, 15);\\r\\n}\\r\\n\\r\\n.wrap .line_menu .pokemon_but {\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    font-size: 40px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    right: 150px;\\r\\n    left: auto;\\r\\n    margin-top: 15px;\\r\\n    text-decoration: none;\\r\\n    color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.wrap .line_menu .pokemon_but:hover {\\r\\n    color: rgb(230, 93, 15);\\r\\n}\\r\\n\\r\\n.wrap .wrap_card{\\r\\n    margin-top: 200px;\\r\\n    width: 100%;\\r\\n    min-width: 500px;\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card{\\r\\n    width: 490px;\\r\\n    height: 250px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    box-shadow: 4px 6px 15px 13px rgba(128, 128, 128, 0.411);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    background-color: orange;\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card .line{\\r\\n    width: 490px;\\r\\n    height: 3px;\\r\\n    background-color: black;\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card .photo_name{\\r\\n    width: 490px;\\r\\n    height: 122px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card .photo_name .photo{\\r\\n    width: 125px;\\r\\n    height: 122px;\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card .photo_name .name{\\r\\n    align-self: center;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 35px;\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card .effect{\\r\\n    width: 490px;\\r\\n    height: 125px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card .effect .titel{\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 20px;\\r\\n    margin-top: 0px\\r\\n}\\r\\n\\r\\n.wrap .wrap_card .card .effect .info_effect{\\r\\n    width: 470px;\\r\\n    margin-left: 10px;\\r\\n    height: 75px;\\r\\n    margin-top: 1px;\\r\\n    background-color: orange;\\r\\n    border: none;\\r\\n    resize: none;\\r\\n    font-size: 13px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/about.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/home.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);\"]);\n// Module\nexports.push([module.i, \".wrapper {\\r\\n    min-width: 500px;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.wrapper .line_menu {\\r\\n    display: flex;\\r\\n    min-width: 500px;\\r\\n    flex-direction: row;\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    height: 80px;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    top: 0;\\r\\n    background-color: rgb(132, 172, 218);\\r\\n}\\r\\n\\r\\n.wrapper .line_menu .logo {\\r\\n    display: block;\\r\\n    width: 150px;\\r\\n    height: 80px;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n\\r\\n.wrapper .line_menu .main_but {\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    font-size: 40px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    right: 20px;\\r\\n    left: auto;\\r\\n    margin-top: 15px;\\r\\n    text-decoration: none;\\r\\n    color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.wrapper .line_menu .main_but:hover {\\r\\n    color: rgb(230, 93, 15);\\r\\n}\\r\\n\\r\\n.wrapper .line_menu .pokemon_but {\\r\\n    position: absolute;\\r\\n    display: block;\\r\\n    font-size: 40px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    right: 150px;\\r\\n    left: auto;\\r\\n    margin-top: 15px;\\r\\n    text-decoration: none;\\r\\n    color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.wrapper .line_menu .pokemon_but:hover {\\r\\n    color: rgb(230, 93, 15);\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card {\\r\\n    margin-top: 200px;\\r\\n    width: 100%;\\r\\n    min-width: 500px;\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card {\\r\\n    width: 490px;\\r\\n    height: 400px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    box-shadow: 4px 6px 15px 13px rgba(128, 128, 128, 0.411);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    background-color: rgba(0, 153, 204, 0.822);\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf {\\r\\n    width: 490px;\\r\\n    height: 250px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .photo {\\r\\n    width: 180px;\\r\\n    height: 250px;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right {\\r\\n    width: 310px;\\r\\n    height: 250px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right .name_inf {\\r\\n    width: 310px;\\r\\n    height: 125px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right .name_inf .name {\\r\\n    margin-top: 45px;\\r\\n    font-size: 40px;\\r\\n    margin-left: 2px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right .name_inf .second_name {\\r\\n    margin-top: 45px;\\r\\n    font-size: 40px;\\r\\n    margin-left: 7px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right .phone_inf {\\r\\n    width: 310px;\\r\\n    height: 122px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right .phone_inf .phone_title{\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 25px;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right .phone_inf .phone{\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 25px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .photo_inf .info_right .line{\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    top: 0;\\r\\n    height: 3px;\\r\\n    width: 310px;\\r\\n    display: block;\\r\\n    background-color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .info{\\r\\n    width: 490px;\\r\\n    height: 150px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .info .email_inf{\\r\\n    width: 490px;\\r\\n    height: 75px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .info .email_inf .email_title{\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 20px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .info .email_inf .email{\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 20px;\\r\\n    margin-top: 2px;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .info .git_inf{\\r\\n    width: 490px;\\r\\n    height: 75px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .info .git_inf .git_title{\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 20px;\\r\\n    margin-top: 5px;\\r\\n}\\r\\n\\r\\n.wrapper .wrapper_card .card .info .git_inf .git{\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 20px;\\r\\n    margin-top: 2px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });