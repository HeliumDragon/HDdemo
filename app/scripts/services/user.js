'use strict';

/**
 * @ngdoc service
 * @name hddemoApp.User
 * @description
 * # User
 * Factory in the hddemoApp.
 */
angular.module('hddemoApp')
  .factory('User', function () {
    var user = {
      username:'',
      password:'',
      bio:''
    };

    // Public API here
    return {
      get: function () {
        return user;
      }
    };
  });
