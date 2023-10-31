const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api');

describe('API integration tests', function() {
	const url = 'http://localhost:7865';
	
	it('GET / returns correct response', function(done) {
		request.get(`${url}/`, (_err, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(body).to.equal('Welcome to the payment system');
			done();
		});
	});

	it('GET /cart/:id returns correct response for valid :id', function(done) {
		request.get(`${url}/cart/127`, (_err, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(body).to.be.equal('Payment methods for cart 127');
			done();
		});
	});
	
	it('GET /cart/:id return the correct status code when :id is NOT a number (=> 404)', function(done) {
		request.get(`${url}/cart/abc`, (_err, res, _body) => {
			expect(res.statusCode).to.be.equal(404);
			done();
		});
	});

	it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
		request.get(`${url}/cart/-47`, (_err, res, _body) => {
			expect(res.statusCode).to.be.equal(404);
			done();
		});
	});

	it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
		request.get(`${url}/cart/d200-44a5-9de6`, (_err, res, _body) => {
			expect(res.statusCode).to.be.equal(404);
			done();
		});
	});

	it('POST /login returns valid response', (done) => {
		request.post(`${url}/login`, {json: {userName: 'Jordy'}}, (_err, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(body).to.be.equal('Welcome Jordy');
			done();
		});
	});
	
	it('GET /available_payments returns valid response', (done) => {
		request.get(`${url}/available_payments`, (_err, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(JSON.parse(body))
				.to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
			done();
		});
	});
});
