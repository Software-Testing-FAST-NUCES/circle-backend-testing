let chai = require("chai");
let server = require("../app");
let chaiHttp = require("chai-http");

const {
  existingUser,
  nonexistingUser,
  searchEmptyField,
} = require("../data/search-data");

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
            // res.body.should.be.a("object");
            done();
        });
    });

    it("non existing user should not be found", (done) => {
      chai
        .request(server)
        .post("/api/search/")
        .send(nonexistingUser)
        .end((err, res) => {
            assert.equal(res.status, 500);
            //res.body.should.be.a("object");
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
            // res.body.should.be.a("object");
            done();
        });
    });
      
  });

});  