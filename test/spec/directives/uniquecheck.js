'use strict';

describe('Directive: uniqueCheck', function () {

  // load the directive's module
  beforeEach(module('hddemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<unique-check></unique-check>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uniqueCheck directive');
  }));
});
