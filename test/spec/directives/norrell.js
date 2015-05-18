'use strict';

describe('Directive: norrell', function () {

  // load the directive's module
  beforeEach(module('jsmnApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<norrell></norrell>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the norrell directive');
  }));
});
