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

        var converter = new Showdown.converter();
        var formatter = function(markdown){
          return converter.makeHtml(markdown);
        };

        var parser = function(html){
          return toMarkdown(html);
        };

        ngModelCtrl.$formatters.push(formatter);
        ngModelCtrl.$parsers.push(parser);

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
