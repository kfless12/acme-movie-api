const { expect } = require('chai');

const app = require('supertest')(require('../app'));

describe('Routes', function() {
  describe('first route check  (/)', function() {
    it('should show the text sent from / route', async()=>{
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme API');
    });
  });
});