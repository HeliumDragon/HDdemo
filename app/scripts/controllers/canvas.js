'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:CanvasCtrl
 * @description
 * # CanvasCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('CanvasCtrl', function ($scope, createjs) {

  $scope.init = (function(){
    var cjs = createjs,
        stage = new cjs.Stage('canvas'),
        canvas = document.getElementById('canvas');

    var Circle = function (x, y, radius) {
      this.container = new cjs.Container();
      this.shape = new cjs.Shape();
      this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.shape.graphics
            .beginFill(this.color)
            .drawCircle(this.x, this.y, this.radius);
      this.container.addChild(this.shape);
    };

    Circle.prototype.render = function () {
      var self = this;

      stage.addChild(this.container);

      cjs.Ticker.timingMode = cjs.Ticker.RAF;
      cjs.Ticker.framerate = 60;
      cjs.Ticker.addEventListener('tick', function(){
        self.animate();
        stage.update();
      });
    };

    Circle.prototype.animate = function(){//add argument for type of animation
      this.x += 1;
    };

    canvas.addEventListener('click', function(e){

      if(e.stopPropagation()){
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }

      var running = true,
          c = new Circle(e.offsetX, e.offsetY, 5);

      c.render();

      console.log('Canvas app is running = ' + running);
    });


  })();
});
