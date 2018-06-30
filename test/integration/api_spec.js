/* eslint-env node, mocha */
import request from 'supertest'

import app from '../../src/server'

describe('API', () => {

  it('requestiong / gives a hello', (done) => {
    request(app)
        .get('/')
        .expect(200, 'hello', done)
  })

})

it('POST / gives a hello including the to', (done) => {
    request(app)
        .post('/')
        .send({ to: 'someone' })
        .expect('Content-Type', /json/)
        .expect(200, {status: "ok", message: "hello someone!"}, done)
})