'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
