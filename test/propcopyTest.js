'use strict';
var should = require('should');
var propcopy = require('../src/propcopy.js');

describe('', function() {
    it('is an object after the instanciation', function() {
        propcopy.should.be.an.object;
    });

    it('returns an object with the given point separated string properties', function() {
        propcopy.add('this.is.a.test').should.eql({this: {is: {a: { test: null}}}});
    });

    it('and the correct value', function() {
        propcopy.add('this.is.a.test', 'someValue').should.eql({this: {is: {a: { test: 'someValue'}}}});
    });

    it('works with multiple calls', function() {
        propcopy.add('this.is.a.test', 'someValue').should.eql({this: {is: {a: { test: 'someValue'}}}});
        propcopy.add('this.is.another.test', 'someValue').should.eql({this: {is: {a: { test: 'someValue'}, another: {test: 'someValue'}}}});
        propcopy.add('this.is.another.funky.test', 'someValue').should.eql({this: {is: {a: { test: 'someValue'}, another: {test: 'someValue', funky: {test: 'someValue'}}}}});
    });

    it('has a getter that returns the complete object', function() {
        propcopy.get().should.eql({this: {is: {a: { test: 'someValue'}, another: {test: 'someValue', funky: {test: 'someValue'}}}}});
    });
});
