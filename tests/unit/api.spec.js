const chai = require('chai')
const supertest = require('supertest')
const mocha = require('mocha')

const { describe, it, before } = mocha
const { expect } = chai
const app = require('../../app')
let request = supertest(app)

describe('Url shortener API', () => {
  before(function (done) {
    request
      .get('/api/init')
      .expect(200)
      .end(() => {
        done()
      })
  })

  it('Should have no records after db init.', (done) => {
    request
      .get('/api/get_url/1')
      .expect(404)
      .end((err) => {
        done(err)
      })
  })

  it('Should have 1 record after record insert', (done) => {
    request
      .post('/api/create_url')
      .send({ url: 'https://www.apple.com' })
      .expect(201)
      .end((err, { body }) => {
        expect(body[0]).to.equal(1)
        done(err)
      })
  })

  it('Should fail if URL is not passed in post body', (done) => {
    request
      .post('/api/create_url')
      .send({})
      .expect(412)
      .end((err) => {
        done(err)
      })
  })
})
