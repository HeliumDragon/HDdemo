'use strict';

/**
 * @ngdoc service
 * @name hddemoApp.uniqueness
 * @description
 * # uniqueness
 * Factory in the hddemoApp.
 */
angular.module('hddemoApp')
  .factory('uniqueness', function () {
    // Service logic
    // ...

    var usernames = [
      'Jessie',
      'jessie',
      'jess',
      'Jess',
      'bot',
      'droid',
      'superman'
    ];

    // Public API here
    return {
      taken: function (name) {
        return usernames.indexOf(name)>=0;
      }
    };
  });
