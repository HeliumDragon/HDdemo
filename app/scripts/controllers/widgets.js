'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:WidgetsCtrl
 * @description
 * # WidgetsCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('WidgetsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  });
