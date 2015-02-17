'use strict';

describe('Controller: PairsCtrl', function () {

  // load the controller's module
  beforeEach(module('hddemoApp'));

  var PairsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PairsCtrl = $controller('PairsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
