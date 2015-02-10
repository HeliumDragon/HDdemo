'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:CryptoCtrl
 * @description
 * # CryptoCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('CryptoCtrl', function ($scope, _, $) {

		$scope.encrypt = function(msg, key){

      var numMsg = _.map(msg, function(letter){
      	return letter.charCodeAt(0);
      });

      var numKey = _.map(key, function(letter){
      	return letter.toUpperCase().charCodeAt(0) - 65;
      });

      var encryptedText = _.map(numMsg, function(num, index){
      	var addition = num + numKey[index%key.length];
      	if(num>=65 && num<=90){
      		return addition <= 90 ? addition : addition-26;
      	}else if(num>=97 && num<=122){
      		return addition <= 122 ? addition : addition-26;
      	}else{
      		return num;
      	}
      });
      $scope.encryptedText = String.fromCharCode.apply(this, encryptedText);

  		};


  		$scope.decipher = function(ciphertext, key){

	  		var numMsg = _.map(ciphertext, function(letter){
	      	return letter.charCodeAt(0);
	      });

	      var numKey = _.map(key, function(letter){
	      	return letter.toUpperCase().charCodeAt(0) - 65;
	      });

	      var decipheredText = _.map(numMsg, function(num, index){
	      	var subtract = num - numKey[index%key.length];
	      	if(num>=65 && num<=90){
	      		return subtract >=65 ? subtract : subtract+26;
	      	}else if(num>=97 && num<=122){
	      		return subtract >=97 ? subtract : subtract+26;
	      	}else{
	      		return num;
	      	}
      	});
      	$scope.decipheredText = String.fromCharCode.apply(this, decipheredText);

  		};

  });
