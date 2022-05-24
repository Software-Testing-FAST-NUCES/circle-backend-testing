let chai = require("chai");
let server = require("../app");
let chaiHttp = require("chai-http");
const {
  newUser,
  signUpEmptyFields,
  oldUser,
  currentUser,
  nonUser,
  loginEmptyFields,
} = require("../data/auth-data");
let should = chai.should();
let { expect, assert } = require("chai");
chai.use(chaiHttp);

describe("Authentication APIs", () => {
  describe("POST users/signin", () => {
    it("it should allow a user with correct credential to sign in", (done) => {
      chai
        .request(server)
        .post("/api/users/signin")
        .send(oldUser)
        .end((err, res) => {
          assert.equal(res.status, 200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("it should not allow a user with incorrect credential to sign in", (done) => {
      chai
        .request(server)
        .post("/api/users/signin")
        .send(nonUser)
        .end((err, res) => {
          assert.equal(res.status, 400);
          res.text.should.be.eq("User Doesn't Exists");
          done();
        });
    });

    it("it should not allow a user to signin without providing any credential", (done) => {
      chai
        .request(server)
        .post("/api/users/signin")
        .send(loginEmptyFields)
        .end((err, res) => {
          assert.equal(res.status, 400);
          res.text.should.be.eq(`"email" is not allowed to be empty`);
          done();
        });
    });
  });

  describe("POST users/signup", () => {
    it("it should allow a user with correct unique fields data to sign up", (done) => {
      chai
        .request(server)
        .post("/api/users/signup")
        .send(newUser)
        .end((err, res) => {
          assert.equal(res.status, 200);
          res.body.should.be.a("object");
          // assert.equal(res.body.email, currentUser.email);
          //res.body.should.have.property("errors");
          // res.body.errors.should.have.property('pages');
          // res.body.errors.pages.should.have.property('kind').eql('required');
          done();
        });
    });

    it("it should not allow a user to signin without providing any credential", (done) => {
      chai
        .request(server)
        .post("/api/users/signup")
        .send(signUpEmptyFields)
        .end((err, res) => {
          assert.equal(res.status, 400);
          res.text.should.be.eq(`"firstname" is not allowed to be empty`);
          done();
        });
    });
  });
});
