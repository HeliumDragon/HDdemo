'use strict';

/**
 * @ngdoc directive
 * @name hddemoApp.directive:contactCard
 * @description
 * # contactCard
 */
angular.module('hddemoApp')
  .directive('contactCard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      replace:true,
      //scope: {
        //'contact': '=contactCard'
      //},
      link: function postLink(scope, element, attrs) {
        element.text('this is the contactCard directive');
        element.hide().fadeIn(2000);
        console.log(attrs);
        console.log(scope.user);
        attrs.$observe('data-obj', function(nv){
          console.log('directive '+nv);
        });
      }
    };
  });
/*
$rootScope
$scope
scope
protypical inheritence(read but not write right to parent scope)
solution: embded properties in an Object
(ng-model always have a dot)
*/
