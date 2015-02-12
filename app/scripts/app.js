'use strict';

/**
 * @ngdoc overview
 * @name hddemoApp
 * @description
 * # hddemoApp
 *
 * Main module of the application.
 */
angular
  .module('hddemoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'underscore',
    'moment',
    'jQuery',
    'Highcharts',
    'ui.grid',
    'ui.calendar',
    'createjs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/draw', {
        templateUrl: 'views/draw.html',
        controller: 'DrawCtrl'
      })
      .when('/crypto', {
        templateUrl: 'views/crypto.html',
        controller: 'CryptoCtrl'
      })
      .when('/football', {
        templateUrl: 'views/football.html',
        controller: 'FootballCtrl'
      })
      .when('/canvas', {
        templateUrl: 'views/canvas.html',
        controller: 'CanvasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('underscore', [])
  .factory('_', function() {
    return window._;
  });
  angular.module('moment', [])
    .factory('moment', function() {
      return window.moment;
  });
  angular.module('jQuery', [])
    .factory('$', function() {
      return window.$;
  });
  angular.module('Highcharts', [])
  .factory('Highcharts', function() {
    return window.Highcharts;
  });
  angular.module('createjs', [])
  .factory('createjs', function() {
    return window.createjs;
  });
