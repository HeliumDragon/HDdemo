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
    'Highcharts'
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