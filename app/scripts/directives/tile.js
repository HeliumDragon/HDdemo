'use strict';

/**
 * @ngdoc directive
 * @name hddemoApp.directive:tile
 * @description
 * # tile
 */
angular.module('hddemoApp')
  .directive('tile', function ($) {
    return {
      template: '<div class="tile"></div>',
      restrict: 'E',
      require:'?ngModel',
      replace:true,
      transclude: true,
      link: function (scope, element, attrs, ngModelCtrl) {

        var width = element.css('width');
        var game = function (length) {

          if(length === 2) {
            if(scope.selected[0].attr('tile-value') === scope.selected[1].attr('tile-value')){
              scope.selected[0].removeClass('mismatch').addClass('match').off('click');
              scope.selected[1].removeClass('mismatch').addClass('match').off('click');
              if($('.match').length===12){
                $('.win').show(2000);
              } else {
                $('.info').show('slow').hide(1900);
              }

            }else{
              scope.selected[0].addClass('mismatch');
              scope.selected[1].addClass('mismatch');
            }
          }

        };

      element.css('height', width);

      element.click(function (e) {
        element.addClass(attrs.tileValue);
        if(scope.selected.length>0 && scope.selected[0][0] === $(e.currentTarget)[0]){
          return false;
        } else {
          scope.selected.push($(e.currentTarget));
        }
        game(scope.selected.length);

      });


      }
    };
  });
