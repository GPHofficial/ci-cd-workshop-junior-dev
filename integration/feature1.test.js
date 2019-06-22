const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/index');

describe('GET root path', () => {
  it('should respond success', (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.status.should.equal(200);
      done();
    });
  });

  afterAll(() => {
    server.stop();
  });
});
