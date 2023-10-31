const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('API integration tests', function() {
  const url = 'http://localhost:7865';

  it('should return the correct status code and message for the index page', function(done) {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

