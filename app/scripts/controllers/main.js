'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
