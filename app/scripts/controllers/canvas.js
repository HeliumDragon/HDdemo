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
        canvas = document.getElementById('canvas'),
        startBtn = document.getElementById('start'),
        pauseBtn = document.getElementById('pause'),
        c=[];

    //circle constructor
    var Circle = function (x, y, radius, id) {
      this.container = new cjs.Container();
      this.shape = new cjs.Shape();
      this.anim = true;
      this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.id = id;
    };

    //render circles
    Circle.prototype.render = function () {

      this.shape.graphics.clear();
      this.shape.graphics
            .beginFill(this.color)
            .drawCircle(this.x, this.y, this.radius);

      this.container.addChild(this.shape);

      stage.addChild(this.container);

    };

    //animate circles
    Circle.prototype.animate = function(e){//add argument for type of animation

      this.y -= e.delta/1000*100;

      this.render();

    };

    //runAnim function to start animation on click of canvas
    var runAnim = function(e){

      //prevent event bubbling
      if(e.stopPropagation()){
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }

      var target = e.target || e.srcElement;

      target.setAttribute('disabled', 'disabled');
      pauseBtn.removeAttribute('disabled');

      var mousePosX,
          mousePosY;

      var setMousePos = function(e){
        mousePosX = e.offsetX;
        mousePosY = e.offsetY;
      };

      //update the stage with the latest tick if not paused
      var tick = function(e){

        if(!e.paused){

          c.push(new Circle(mousePosX, mousePosY, 5, c.length));

          for (var i in c) {
            if(c[i].anim && c[i].y > 0){
              c[i].render();
              c[i].animate(e);
            } else if(c[i].y < 0){
              c[i].shape.graphics.clear();
              c[i].anim = false;
            }
          }

          stage.update();

        } else {

          var onCanvas = false;

          for (var j in c) {
            if(c[j].anim && c[j].y > 0){
              c[j].render();
              c[j].animate(e);
            } else if(c[j].y < 0){
              c[j].shape.graphics.clear();
              c[j].anim = false;
            }
          }

          for (var k = 0; k < c.length; k++) {
            if(c[k].anim === true){
              onCanvas = true;
            }
          }

          if(onCanvas === false){
            c = [];
          }

        }
          stage.update();
      };


      //keep track of mouse cursor
      canvas.addEventListener('mousemove', setMousePos, false);

      //setup for Ticker
      cjs.Ticker.reset();

      cjs.Ticker.paused = false;
      cjs.Ticker.timingMode = cjs.Ticker.RAF;
      cjs.Ticker.framerate = 60;
      cjs.Ticker.addEventListener('tick', tick, false);

    };

    //pause animation
    var stopAnim = function(e){

      //prevent event bubbling
      if(e.stopPropagation()){
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }

      var target = e.target || e.srcElement;

      target.setAttribute('disabled', 'disabled');
      startBtn.removeAttribute('disabled');

      cjs.Ticker.paused = true;

    };

    //listen for click on canvas
      startBtn.addEventListener('click', runAnim, false);
      pauseBtn.addEventListener('click', stopAnim, false);

  })();
});
