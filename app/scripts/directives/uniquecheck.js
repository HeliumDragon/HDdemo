'use strict';

/**
 * @ngdoc directive
 * @name hddemoApp.directive:uniqueCheck
 * @description
 * # uniqueCheck
 */
angular.module('hddemoApp')
  .directive('uniqueCheck', function (uniqueness) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        var checkUnique = function(name){
          var isValid = !uniqueness.taken(name);
          ngModelCtrl.$setValidity('unique', isValid);
          console.log(isValid);
          return name;
        };
        ngModelCtrl.$parsers.push(checkUnique);
      }
    };
  });
