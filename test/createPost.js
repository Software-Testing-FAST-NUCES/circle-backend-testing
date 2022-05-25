let chai = require('chai')
let server = require('../app')
let chaiHttp = require('chai-http')
const fs = require('fs')
const { dummyUser, avatarFilePath } = require('../data/user-data')
let should = chai.should()
let { expect, assert } = require('chai')
chai.use(chaiHttp)

describe('Create Post APIs', () => {
  describe('GET posts', () => {
    it('it should get all posts of a user', (done) => {
      chai
        .request(server)
        .get('/api/posts/user/628a8ca7dbac5f17b2debe99')
        .end((err, res) => {
          assert.equal(res.status, 200)
          res.body.should.be.a('array')
          done()
        })
    })

    it('it should not get posts of the user which is not in DB', (done) => {
      chai
        .request(server)
        .get('/api/posts/user/1209348124124812')
        .end((err, res) => {
          assert.equal(res.status, 500)
          done()
        })
    })
  })

  describe('POST posts', () => {
    it('it should post text and image of a user', (done) => {
      chai
        .request(server)
        .post('/api/posts/')
        .field('text', 'hi this is my post')
        .attach('photos', fs.readFileSync(avatarFilePath), dummyUser.avatar)
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNDE4NWQwOGUzYjhkNzhkNGQzYTUiLCJpYXQiOjE2NTMzMzYxNTZ9.YehVKCask5Nz_0JqxextT9W1pilbIJItTLHrq3759e0',
        )
        .end((err, res) => {
          assert.equal(res.status, 200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('it should post an image of a user', (done) => {
      chai
        .request(server)
        .post('/api/posts/')
        .attach('photos', fs.readFileSync(avatarFilePath), dummyUser.avatar)
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNDE4NWQwOGUzYjhkNzhkNGQzYTUiLCJpYXQiOjE2NTMzMzYxNTZ9.YehVKCask5Nz_0JqxextT9W1pilbIJItTLHrq3759e0',
        )
        .end((err, res) => {
          assert.equal(res.status, 200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('it should post text of a user', (done) => {
      chai
        .request(server)
        .post('/api/posts/')
        .field('text', 'hi this is my post')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNDE4NWQwOGUzYjhkNzhkNGQzYTUiLCJpYXQiOjE2NTMzMzYxNTZ9.YehVKCask5Nz_0JqxextT9W1pilbIJItTLHrq3759e0',
        )
        .end((err, res) => {
          assert.equal(res.status, 200)
          res.body.should.be.a('object')
          done()
        })
    })
  })
})
