const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
	it('should call Utils.CalculateNumber with SUM type', function() {
		const calcSpy = sinon.spy(Utils, 'calculateNumber');
		const logSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		expect(calcSpy.calledWith('SUM', 100, 20)).to.be.true;
		expect(logSpy.calledWith('The total is: 120')).to.be.true;

		calcSpy.restore();
		logSpy.restore();
	});
});
