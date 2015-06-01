'use strict';

describe('Controller: InfographicsCtrl', function () {

  // load the controller's module
  beforeEach(module('hddemoApp'));

  var InfographicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfographicsCtrl = $controller('InfographicsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
