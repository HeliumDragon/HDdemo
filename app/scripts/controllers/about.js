'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('AboutCtrl', function ($scope, People) {

  $scope.user = {
     name: 'Zi Gong',
     bio: '<p>Zi Gong [a disciple] asked: "Is there any one word that could guide a person throughout life?" The Master replied: "How about \'reciprocity\'! Never impose on others what you would not choose for yourself."</p>'
   };

  $scope.people = People.get();

  $scope.$watch('message.text', function(nv){
    if(nv){
      console.log(nv);
    }
  });

  });
