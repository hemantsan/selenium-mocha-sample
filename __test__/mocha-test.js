var assert = require('assert');

describe('Array - A passing test', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('String - A failing test', function() {
    describe('#sayHello()', function() {
        it('should return some text', function() {
            var foobar = {
                sayHello: function() {
                    return 'Hello Mocha!';
                }
            };

            assert.equal(foobar.sayHello(), 'funky devs!');
        });
    });
});
