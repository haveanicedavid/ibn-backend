/* global it, describe */
import app from '../server/server'
import Snap from '../server/api/snap/snapModel'
import { assert, expect } from 'chai'
import request from 'supertest'
import sinon from 'sinon'
import 'sinon-mongoose'

describe('Server', () => {
  // Test will pass if server responds with JSON
  it('should GET all snaps', (done) => {
    request(app)
      .get('/api/snaps')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, resp) => {
        if (err) console.log(err)
        assert.isOk(resp)
        done()
      })
  })
})

describe('GET /api/snaps', (done) => {
  // Test will pass if we get all snaps
  it('should return all snaps', (done) => {
    const SnapMock = sinon.mock(Snap)
    const expectedResult = { status: true, snap: [] }
    SnapMock.expects('find').yields(null, expectedResult)
    Snap.find((err, result) => {
      if (err) console.log(err)
      SnapMock.verify()
      SnapMock.restore()
      expect(result.status).to.be.true
      done()
    })
  })

  // Test will pass if we fail to get a Snap
  it('should return error', (done) => {
    const SnapMock = sinon.mock(Snap)
    const expectedResult = { status: false, error: 'Something went wrong' }
    SnapMock.expects('find').yields(expectedResult, null)
    Snap.find((err, result) => {
      SnapMock.verify()
      SnapMock.restore()
      expect(err.status).to.not.be.true
      done()
    })
  })
})

describe('Create a new Snap', () => {
  it('should create new post', (done) => {
    var SnapMock = sinon.mock(new Snap({ Snap: 'Save new Snap from mock' }))
    var snap = SnapMock.object
    var expectedResult = { status: true }
    SnapMock.expects('save').yields(null, expectedResult)
    snap.save((err, result) => {
      if (err) console.log(err)
      SnapMock.verify()
      SnapMock.restore()
      expect(result.status).to.be.true
      done()
    })
  })
  // Test will pass if the Snap is not saved
  it('should return error, if post not saved', (done) => {
    var SnapMock = sinon.mock(new Snap({ Snap: 'Save new Snap from mock' }))
    var snap = SnapMock.object
    var expectedResult = { status: false }
    SnapMock.expects('save').yields(expectedResult, null)
    snap.save(function (err, result) {
      if (err) console.log(err)
      SnapMock.verify()
      SnapMock.restore()
      expect(err.status).to.not.be.true
      done()
    })
  })
})
