'use strict';

describe('Service: uniqueness', function () {

  // load the service's module
  beforeEach(module('hddemoApp'));

  // instantiate service
  var uniqueness;
  beforeEach(inject(function (_uniqueness_) {
    uniqueness = _uniqueness_;
  }));

  it('should do something', function () {
    expect(!!uniqueness).toBe(true);
  });

});
