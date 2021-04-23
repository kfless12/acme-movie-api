const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('Routes', function () {
  beforeEach(() => syncAndSeed());
  describe('first route check  (/)', function () {
    it('should show the text sent from / route', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme API');
    });
  });

  describe('first route check  (/)', function () {
    it('should show all Movies', async () => {
      const response = await app.get('/api/movies');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(4);
    });
  });
});
