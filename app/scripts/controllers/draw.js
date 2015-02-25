'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:DrawCtrl
 * @description
 * # DrawCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('DrawCtrl', function ($scope, $, $swipe) {
  	var ctx = $('#drawingCanvas')[0].getContext('2d');
    var $canvas = $('#drawingCanvas'), mouseDown, lastEvent;

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
    $scope.colors = [{color:'#d84c78', chosen: true}, {color:'#6592d1'}, {color:'#D95656'},{color:'#222'}];
    $scope.pickedColor = $scope.colors[0].color;
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

    $swipe.bind($canvas, {
      'start':function(e){
        lastEvent = e;
      //  mouseDown = true;
      },
      'move': function(e){
        //canvas position
        var pos = $canvas.offset();
        ctx.beginPath();
        ctx.moveTo(lastEvent.x - pos.left, lastEvent.y-pos.top);
        ctx.lineTo(e.x - pos.left, e.y-pos.top);
        ctx.strokeStyle =  $scope.pickedColor;
        ctx.stroke();
        lastEvent = e;
      },
      'end':function(){
      //  mouseDown = false;
      },
      'cancel': function(){
        //mouseDown = false;
      }
    });

  });
