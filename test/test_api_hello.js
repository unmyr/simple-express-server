const assert = require('assert');
const supertest = require('supertest');

const app = require('../index');

describe('GET /api/v1/hello', function () {
  it('it should has status code 200', function (done) {
    supertest(app)
      .get('/api/v1/hello')
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        assert.deepEqual(JSON.parse(res.text), {
          message: 'Hello World! (GET)',
        });
        done();
      });
  });
});

describe('POST /api/v1/hello', function () {
  it('it should has status code 200', function (done) {
    supertest(app)
      .post('/api/v1/hello')
      .send({ name: 'foo' })
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        assert.deepEqual(JSON.parse(res.text), {
          message: 'Hello foo',
        });
        done();
      });
  });
});
