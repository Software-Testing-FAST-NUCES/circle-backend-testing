let chai = require("chai");
let server = require("../app");
let chaiHttp = require("chai-http");

const {
  existingUser,
  nonexistingUser,
  searchEmptyField,
  signUpEmptyField,
} = require("../data/data");

let should = chai.should();
let { expect, assert } = require("chai");
chai.use(chaiHttp);

describe("Search APIs", () => {
  describe("POST search/", () => {
    it("existing user should be found", (done) => {
      chai
        .request(server)
        .post("/api/search/")
        .send(existingUser)
        .end((err, res) => {
            assert.equal(res.status, 200);
            res.body.should.be.a("array");
            done();
        });
    });

    it("non existing user should not be found", (done) => {
      chai
        .request(server)
        .post("/api/search/")
        .send(nonexistingUser)
        .end((err, res) => {
            assert.equal(res.status, 200);
            done();
        });
    });

    it("all existing users should be found", (done) => {
      chai
        .request(server)
        .post("/api/search/")
        .send(searchEmptyField)
        .end((err, res) => {
            assert.equal(res.status, 200);
            res.body.should.be.a("array");
            done();
        });
    });

    it("internal server error", (done) => {
      chai
        .request(server)
        .post("/api/search2/")
        .send(existingUser)
        .end((err, res) => {
            assert.equal(res.status, 404);
            done();
        });
    });

  });

});

describe("POST users/signup", () => {

  it("user should not be signed-up if any single field is empty", (done) => {
    chai
      .request(server)
      .post("/api/users/signup")
      .send(signUpEmptyField)
      .end((err, res) => {
        assert.equal(res.status, 400);
        res.text.should.be.eq(`"email" is not allowed to be empty`);
        done();
      });
  });
});