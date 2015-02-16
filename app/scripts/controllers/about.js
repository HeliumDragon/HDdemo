'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('AboutCtrl', function ($scope, People, $http, User) {

  $scope.step = 1;
  $scope.user = User.get();
   $http.get('data/markdown.md').success(function (bio) {
     $scope.user.bio = bio;
   });

  $scope.people = People.get();

  $scope.$watch('message.text', function(nv){
    if(nv){
      console.log(nv);
    }
  });

  $scope.advance = function(){
    $scope.step++;
  };

  });
