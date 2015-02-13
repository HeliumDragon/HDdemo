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
<<<<<<< HEAD
    var cjs = createjs,
        stage = new cjs.Stage('canvas'),
        canvas = document.getElementById('canvas');

    var Circle = function (x, y, radius) {
      this.container = new cjs.Container();
      this.shape = new cjs.Shape();
=======

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
>>>>>>> canvasJay
      this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
      this.x = x;
      this.y = y;
      this.radius = radius;
<<<<<<< HEAD
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

=======
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

          for (var k = 0; k < c.length-1; k++) {
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
>>>>>>> canvasJay
      if(e.stopPropagation()){
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }

<<<<<<< HEAD
      var running = true,
          c = new Circle(e.offsetX, e.offsetY, 5);

      c.render();

      console.log('Canvas app is running = ' + running);
    });

=======
      var target = e.target || e.srcElement;

      target.setAttribute('disabled', 'disabled');
      startBtn.removeAttribute('disabled');

      cjs.Ticker.paused = true;

    };

    //listen for click on canvas
      startBtn.addEventListener('click', runAnim, false);
      pauseBtn.addEventListener('click', stopAnim, false);
>>>>>>> canvasJay

  })();
});
