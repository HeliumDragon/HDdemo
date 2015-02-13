'use strict';

describe('Directive: hallo', function () {

  // load the directive's module
  beforeEach(module('hddemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hallo></hallo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hallo directive');
  }));
});
