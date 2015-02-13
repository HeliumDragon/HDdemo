'use strict';

/**
 * @ngdoc directive
 * @name hddemoApp.directive:hallo
 * @description
 * # hallo
 */
angular.module('hddemoApp')
  .directive('hallo', function () {
    return {
      require: 'ngModel',
      link: function ($scope, $element, $attrs, ngModelCtrl) {
        $element.hallo({
          plugins: {
            'halloformat': {},
            'halloblock': {},
            'hallojustify': {},
            'hallolists': {},
            'halloreundo': {}
          }
        });

        ngModelCtrl.$render = function(){
          var contents = ngModelCtrl.$viewValue;
          $element.hallo('setContents', contents);
        };

        $element.on('hallomodified', function(){
          var contents = $element.hallo('getContents');
          ngModelCtrl.$setViewValue(contents);
          $scope.$digest();
        });
      }
    };
  });
