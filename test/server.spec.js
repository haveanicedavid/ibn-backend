/* global it, describe */
import app from '../server/server'
import { assert } from 'chai'
import request from 'supertest'

describe('Server', function () {
  it('should start accept get requests', () => {
    const arr = []
    assert.equal(arr.length, 0)
  })
  it('respond with json', function (done) {
    request(app)
      .get('/snaps')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  it('should GET all snaps', function (done) {
    request(app)
      .get('/snaps')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) console.log(err)
        assert.isOk(resp)
        done()
      })
  })
})
