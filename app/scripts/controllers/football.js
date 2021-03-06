'use strict';

/**
 * @ngdoc function
 * @name hddemoApp.controller:FootballCtrl
 * @description
 * # FootballCtrl
 * Controller of the hddemoApp
 */
angular.module('hddemoApp')
  .controller('FootballCtrl', function ($scope, fbService,_, moment, $, Highcharts) {

    $('#myTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });

    $scope.eventSources = [];

    fbService.getTeams(function(teams){
      //sort Teams by Names
      $scope.teams = _.sortBy(teams.data, function(obj){return obj.name;});
      $scope.teamNames = _.pluck($scope.teams, 'name');

      fbService.getMatches(function(matches){
        $scope.matches = matches.data;
        //add more meta data in match objects (name, moment date...)
        var hid, aid;
        var namedmatches = _.map($scope.matches, function(obj){
          hid = obj.homeTeamId;
          aid = obj.awayTeamId;
          obj.awayname = _.where($scope.teams, {id:aid})[0].name;
          obj.homename = _.where($scope.teams, {id:hid})[0].name;
          obj.moment = moment(obj.date, 'DD-MM-YY');
          obj.homeloses =  (parseInt(obj.homeGoals,10) < parseInt(obj.awayGoals,10));
          obj.homewins = (parseInt(obj.homeGoals,10) > parseInt(obj.awayGoals,10));
          obj.homedraws = (parseInt(obj.homeGoals,10) === parseInt(obj.awayGoals,10));
          return obj;
        });
        //matches grouped by date.
        $scope.datedmatches = _.groupBy(namedmatches, function(obj){
           return obj.moment;
        });

        //calculate home matches stats
        var matchesByHomeTeam = _.groupBy(namedmatches, function(obj){
          return obj.homename;
        });
        var matchesByAwayTeam = _.groupBy(namedmatches, function(obj){
          return obj.awayname;
        });
        var homeMatchesStat = _.map($scope.teamNames, function(name){
          var wc, dc, lc,
           matches = matchesByHomeTeam[name];
           wc = _.where(matches, {homewins:true}).length;
           dc = _.where(matches, {homedraws:true}).length;
           lc = matches.length - wc - dc;
          return {name:name, stat:[wc, dc, lc]};
        });
        var awayMatchesStat = _.map($scope.teamNames, function(name){
          var wc, dc, lc,
           matches = matchesByAwayTeam[name];
           wc = _.where(matches, {homeloses:true}).length;
           dc = _.where(matches, {homedraws:true}).length;
           lc = matches.length - wc - dc;
          return {name:name, stat:[wc, dc, lc]};
        });
        //console.log(matchesByAwayTeam);
        var homeStatData = [{
           name: 'Home Wins',
           data: _.map(homeMatchesStat, function(obj){return obj.stat[0];})
       }, {
           name: 'Home Draws',
           data:  _.map(homeMatchesStat, function(obj){return obj.stat[1];})
       }, {
           name: 'Home Loses',
           data:  _.map(homeMatchesStat, function(obj){return obj.stat[2];})
       }];

       var awayStatData = [{
            name: 'Away Wins',
            data: _.map(awayMatchesStat, function(obj){return obj.stat[0];})
        }, {
            name: 'Away Draws',
            data:  _.map(awayMatchesStat, function(obj){return obj.stat[1];})
        }, {
            name: 'Away Loses',
            data:  _.map(awayMatchesStat, function(obj){return obj.stat[2];})
        }];

        var calMatchEvents = _.map(namedmatches, function(obj){
          var event = {};
          event.title = obj.homename+' VS '+obj.awayname+'\n'+obj.homeGoals+':'+obj.awayGoals;
          event.start = obj.moment._d;
          return event;
        });


        var options1= {
          chart: {
            type: 'column',
            width: parseInt($('.tab-pane').css('width'), 10),
          },
          colors: ['#64D48C','#435B5E','#C12E28'],
          credits: {
            enabled: false
          },
          title: {
              text: 'Home Matches Analysis'
          },
          subtitle: {
              text: 'Source:  2011-2012 Premier League'
          },
          xAxis: {
              categories: $scope.teamNames
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total Matches Played'
              }
          },
          tooltip: {
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
              shared: true
          },
          plotOptions: {
              column: {
                  stacking: 'normal'
              }
          },
          series:homeStatData
        };

        var options2= {
          chart: {
            type: 'column',
            width: parseInt($('.tab-pane').css('width'), 10),
          },
          colors: ['#64D48C','#435B5E','#C12E28'],
          credits: {
            enabled: false
          },
          title: {
              text: 'Away Matches Analysis'
          },
          subtitle: {
              text: 'Source:  2011-2012 Premier League'
          },
          xAxis: {
              categories: $scope.teamNames
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total Matches Played'
              }
          },
          tooltip: {
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
              shared: true
          },
          plotOptions: {
              column: {
                  stacking: 'normal'
              }
          },
          series:awayStatData
        };

        $('#hchart').highcharts(options1);
        $('#achart').highcharts(options2);

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

        $scope.showHChart = function(){

        };
        $scope.showAChart = function(){

        };



      });
    });


});
