const assert = require('assert');
const supertest = require('supertest');

const app = require('../index');

describe('GET /', function () {
  it('it should has status code 200', function (done) {
    supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        assert.strictEqual(res.text, 'Hello World!');
        done();
      });
  });
});
