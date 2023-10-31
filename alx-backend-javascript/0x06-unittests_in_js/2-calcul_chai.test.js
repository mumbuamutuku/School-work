/**
 * 0-calcul.test.js
 */
var expect  = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function() {
	describe('SUM OPERATION', function() {
		it('should return the sum of rounded', function() {
		const res = calculateNumber('SUM', 2.4, 7.9);
		expect(res).to.equal(10);
		
		const res2 = calculateNumber('SUM', 6.1, 5.0);
		expect(res2).to.equal(11);
		});
	});
	describe('SUBTRACT OPERATION', function() {
		it('should return subtraction of rounded number', function() {
			const res = calculateNumber('SUBTRACT', 10.5, 3.2);
			expect(res).to.equal(8);

			const res1 = calculateNumber('SUBTRACT', 1.3, 8.9);
                        expect(res1).to.equal(-8);
		});
	});

	describe('DIVIDE OPERATION', function() {
		 it('should return division of rounded number', function() {
                        const res = calculateNumber('DIVIDE', 10.5, 3.2);
                        expect(res).to.be.closeTo(3.6666666666666665, 0.000001);

                        const res1 = calculateNumber('DIVIDE', 6.0, 1.9);
                        expect(res1).to.equal(3);
		 });
	         it('should return division by zero and return "Error"', function() {
                        const res = calculateNumber('DIVIDE', 10.5, 0);
                        expect(res).to.equal('Error');
		 });
	});
});
