'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:FootballCtrl
 * @description
 * # FootballCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('FootballCtrl', function ($scope, fbService,_, moment, $) {
    $scope.eventSources = [];
    fbService.getTeams(function(teams){
      $scope.teams = teams.data;
      fbService.getMatches(function(matches){
        $scope.matches = matches.data;
        var hid, aid;
        var namedmatches = _.map($scope.matches, function(obj){
          hid = obj.homeTeamId;
          aid = obj.awayTeamId;
          obj.awayname = _.where($scope.teams, {id:aid})[0].name;
          obj.homename = _.where($scope.teams, {id:hid})[0].name;
          obj.moment = moment(obj.date, 'DD-MM-YY');
          return obj;
        });
        $scope.datedmatches = _.groupBy(namedmatches, function(obj){
           return obj.moment;
        });
        var calMatchEvents = _.map(namedmatches, function(obj){
          var event = {};
          event.title = obj.homename+' VS '+obj.awayname+'\n'+obj.homeGoals+':'+obj.awayGoals;
          event.start = obj.moment._d;
          return event;
        });
        console.log(calMatchEvents[0].start);
        $('#calendar').fullCalendar({
          header: {
            left:'prev next',
            center: 'title',
            right: 'basicDay basicWeek'
          },
          height:600,
          events:calMatchEvents,
          defaultView: 'basicWeek'
        });
        $('#calendar').fullCalendar( 'gotoDate', calMatchEvents[0].start);

      });
    });


});
