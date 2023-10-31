/**
 * 0-calcul.test.js
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function() {
	it('should return the sum of rounded', function() {
		const res = calculateNumber(2.4, 7.9);
		assert.strictEqual(res, 10);
		
		const res2 = calculateNumber(6.1, 5.0);
		assert.strictEqual(res2, 11);
	});
	it('check second number and negative', function() {
		const res3 = calculateNumber(1, 3.7);
		assert.strictEqual(res3, 5);

		const res4 = calculateNumber(-1.3, -3.7);
		assert.strictEqual(res4, -5)
	});
});
