'use strict';

/**
 * @ngdoc service
 * @name hddemoApp.People
 * @description
 * # People
 * Factory in the hddemoApp.
 */
angular.module('hddemoApp')
  .factory('People', function () {
    // Service logic
    var people = [
    {
      'name': 'Alex',
      'profession': 'Programmer',
      'hometown': 'St Louis, MO'
    },
    {
      'name': 'David',
      'profession': 'Salesman',
      'hometown': 'Denver, CO'
    },
    {
      'name': 'Laura',
      'profession': 'CEO',
      'hometown': 'San Francisco, CA'
    }];

    // Public API here
    return {
      get: function () {
        return people;
      },
      add: function(person) {
        return people.push(person);
      }

    };
  });
