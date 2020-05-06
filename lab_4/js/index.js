'use strict';
import {Route} from './route';
import {Router} from './router';
import '../css/about.css';
import '../css/home.css';

(function () {
  function init () {
    let router = new Router ([
      new Route ('home', 'home.html', true),
      new Route ('about', 'about.html'),
    ]);
  }
  init ();
}) ();
