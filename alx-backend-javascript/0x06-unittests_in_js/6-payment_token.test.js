const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
	it('should resolve with correct message when success is true', function(done) {
		getPaymentTokenFromAPI(true)
		.then(response => {
			expect(response.data).to.equal('Successful response from the API');
			done();
		})
		.catch(error => {
			done(error);
		});
	});
});
