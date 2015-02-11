'use strict';

describe('Controller: FootballCtrl', function () {

  // load the controller's module
  beforeEach(module('hddemoApp'));

  var FootballCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FootballCtrl = $controller('FootballCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
