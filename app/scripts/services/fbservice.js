'use strict';

/**
 * @ngdoc service
 * @name hddemoApp.fbService
 * @description
 * # fbService
 * Service in the hddemoApp.
 */
angular.module('hddemoApp')
  .service('fbService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var teams = $http.get('/data/teams.json');
    var matches = $http.get('/data/matches.json');
    return {
      getTeams: function(cb){
        teams.then(cb);
        return cb;
      },
      getMatches: function(cb){
        matches.then(cb);
        return cb;
      }
    };
  });
