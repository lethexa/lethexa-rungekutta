var assert = require('assert');
var integrator = require('../lib/rungekutta');


describe('RungeKutta1Order', function () {
    describe('#nextStep()', function () {
        it('should return the correct result', function () {
		var rungekutta = new integrator.RungeKutta1Order( function(x, y) {
			return 3 * x*x * y;
		}); 
		var x0 = 1, y0 = 2, h = 0.1;

		var result = rungekutta.nextStep(x0, y0, h);

            	assert.equal(1.1, Math.round(result.x1 * 1000.0) / 1000.0);
            	assert.equal(2.785, Math.round(result.y1 * 1000.0) / 1000.0);
        });
    });
});

describe('RungeKutta2Order', function () {
    describe('#nextStep()', function () {
        it('should return the correct result', function () {
		var rungekutta = new integrator.RungeKutta2Order( function(x, y, dy) {
			return 3 * x*x * y;
		}); 
		var x0 = 1, y0 = 2, dy0 = 0, h = 0.1;

		var result = rungekutta.nextStep(x0, y0, dy0, h);

            	assert.equal(1.1, Math.round(result.x1 * 1000.0) / 1000.0);
            	assert.equal(2.785, Math.round(result.y1 * 1000.0) / 1000.0);
        });
    });
});


