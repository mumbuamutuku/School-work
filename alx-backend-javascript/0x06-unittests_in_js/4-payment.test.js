const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
	it('should call Utils.CalculateNumber with SUM type and log the correct message', function() {
		const calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const logSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
		expect(logSpy.calledWith('The total is: 10')).to.be.true;

		calcStub.restore();
		logSpy.restore();
	});
});
