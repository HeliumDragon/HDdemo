'use strict';

/**
 * @ngdoc directive
 * @name hddemoApp.directive:tile
 * @description
 * # tile
 */
angular.module('hddemoApp')
  .directive('tile', function () {
    return {
      template: '<div class="tile"></div>',
      restrict: 'E',
      require:'?ngModel',
      replace:true,
      transclude: true,
      link: function (scope, element, attrs, ngModelCtrl) {
        var width = element.parent().css('width');
        var game = function (length) {
          if(length === 2) {
            if(scope.selected[0].text() === scope.selected[1].text()){
              scope.selected[0].removeClass('mismatch').off('click');
              scope.selected[1].removeClass('mismatch').off('click');
            }else{
              scope.selected[0].addClass('mismatch');
              scope.selected[1].addClass('mismatch');
            }
          }
        };

        element.css('width', width);
        element.css('height', width);

        element.click(function (e) {
          //console.log(attrs.visible);
          element.text(attrs.tileValue);
          scope.selected.push($(e.currentTarget));
          game(scope.selected.length);
        });


      }
    };
  });
