/**
 * 0-calcul.test.js
 */
const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function() {
	describe('SUM OPERATION', function() {
		it('should return the sum of rounded', function() {
		const res = calculateNumber('SUM', 2.4, 7.9);
		assert.strictEqual(res, 10);
		
		const res2 = calculateNumber('SUM', 6.1, 5.0);
		assert.strictEqual(res2, 11);
		});
	});
	describe('SUBTRACT OPERATION', function() {
		it('should return subtraction of rounded number', function() {
			const res = calculateNumber('SUBTRACT', 10.5, 3.2);
			assert.strictEqual(res, 8);

			const res1 = calculateNumber('SUBTRACT', 1.3, 8.9);
                        assert.strictEqual(res1, -8);
		});
	});

	describe('DIVIDE OPERATION', function() {
		 it('should return division of rounded number', function() {
                        const res = calculateNumber('DIVIDE', 10.5, 3.2);
                        assert.strictEqual(res, 3.6666666666666665);

                        const res1 = calculateNumber('DIVIDE', 6.0, 1.9);
                        assert.strictEqual(res1, 3);
		 });
	         it('should return division by zero and return "Error"', function() {
                        const res = calculateNumber('DIVIDE', 10.5, 0);
                        assert.strictEqual(res, 'Error');
		 });
	});
});
