'use strict';

describe('Directive: descriptionBox', function () {

  // load the directive's module
  beforeEach(module('jsmnApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<description-box></description-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the descriptionBox directive');
  }));
});
