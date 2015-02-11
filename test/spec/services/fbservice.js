'use strict';

describe('Service: fbService', function () {

  // load the service's module
  beforeEach(module('hddemoApp'));

  // instantiate service
  var fbService;
  beforeEach(inject(function (_fbService_) {
    fbService = _fbService_;
  }));

  it('should do something', function () {
    expect(!!fbService).toBe(true);
  });

});
