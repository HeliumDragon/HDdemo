'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:PairsCtrl
 * @description
 * # PairsCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('PairsCtrl', function ($scope, $) {

    var circle = {type:'circle'};
    var square = {type:'square'};
    $('.info').hide();
    $('.win').hide();

    $scope.selected = [];
    $scope.grids = [
      [circle,square, circle, square],
      [square,circle, square, square],
      [square, circle, circle, circle]
    ];

    $scope.select = function (tile) {
      if ($scope.selected.length === 2) {
        var mismatch = $('.mismatch');

        $scope.selected.splice(0,2);

        setTimeout(function () {
          if(mismatch.hasClass('circle')){
            mismatch.removeClass('circle');
          }
          if(mismatch.hasClass('square')) {
            mismatch.removeClass('square');
          }

        }, 650);
      }
    };



  });
