const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
	let logSpy;

	beforeEach(function() {
		logSpy = sinon.spy(console, 'log');
	});

	afterEach(function() {
		logSpy.restore();
	});

	it('should call the correct message for 100 and 20', function() {
		sendPaymentRequestToApi(100, 20);
		
		expect(logSpy.calledWith('The total is: 120')).to.be.true;
		expect(logSpy.calledOnce).to.be.true
	
	});
	it('should call the correct message for 10 and 10', function() {
                sendPaymentRequestToApi(10, 10);
                expect(logSpy.calledWith('The total is: 20')).to.be.true;
                expect(logSpy.calledOnce).to.be.true

        });
});
