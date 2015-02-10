'use strict';

describe('Controller: CryptoCtrl', function () {

  // load the controller's module
  beforeEach(module('hddemoApp'));

  var CryptoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CryptoCtrl = $controller('CryptoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
