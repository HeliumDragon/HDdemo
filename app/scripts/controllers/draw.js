'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:DrawCtrl
 * @description
 * # DrawCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('DrawCtrl', function ($scope, $) {
  	var ctx = $('canvas')[0].getContext('2d');
    var $canvas = $('canvas'), mouseDown, lastEvent;

    var download = function() {
        var dataUrl = $canvas.get(0).toDataURL('img/png');
        this.href = dataUrl;
    };
    var valToHex = function (val) {
        if (typeof val === 'string'){
          val = parseInt(val);
        }
        var hex = val.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    var toHex = function(r,g,b){
      return '#'+ valToHex(r) + valToHex(g) + valToHex(b);
    };
    $scope.color = {red:'0', green:'0', blue:'0'};
    $scope.colors = [{color:'black', chosen: true}, {color:'blue'}, {color:'red'}];
    $scope.pickColor = function(){
      angular.forEach( $scope.colors, function(val){
        if(val.chosen===true){val.chosen=false;}
      });
      $scope.pickedColor = this.c.color;
      this.c.chosen = true;
    };

    $scope.getHex = function(){
       $scope.hex = toHex($scope.color.red, $scope.color.green, $scope.color.blue);
       return  $scope.hex;
    };

    $scope.addColor = function(){
      var hex =  $scope.getHex();
      $scope.colors.push({color:hex});
      $scope.adding = false;
    };
    $scope.getHex();
    document.getElementById('download').addEventListener('click', download, false);
    //On mouse events on the canvas
    $canvas.mousedown(function(e){
      lastEvent = e;
      mouseDown = true;
    }).mousemove(function(e){
      //Draw lines
      if(mouseDown) {
        ctx.beginPath();
        ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle =  $scope.pickedColor;
        ctx.stroke();
        lastEvent = e;
      }
    }).mouseup(function(){
      mouseDown = false;
    }).mouseleave(function(){
      $canvas.mouseup();
    });
  });
