'use strict';

describe('<%= moduleName %>', function () {

    var myinstance = new window.<%= moduleDefinition %>();

    it('should have someProperty', function () {
        assert.equal(myinstance.someProperty, 'value');
    });

    it('should run someMethod', function () {
        assert.equal(myinstance.someMethod('hello '), 'hello value');
    });

});

