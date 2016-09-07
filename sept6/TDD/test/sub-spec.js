const chai = require('chai');
const supertest = require('supertest')

const app = require('../app.js')

const should = chai.should()
const api = supertest(app)

describe('Sending a POST to /api/sub', () => {
    describe('it should succeed', () => {
        it('in subtracting two numbers', (done) => {
            api.post('/api/sub')
                .send({
                    num1: 8,
                    num2: 4
                })
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);

                    res.body.result.should.be.equal(4);

                    done()
                })
        })

      describe('should fail', () => {
            it('when the nothing is sent in', (done) => {
                api.post('/api/add')
                    .expect(432)
                    .end((err, res) => {
                        if (err) return done(err);

                        res.body.message.should.be.equal('no data fool')

                        done()
                    })
            })
        })
    })
})
