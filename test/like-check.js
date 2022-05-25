let chai = require("chai");
let server = require("../app");
let chaiHttp = require("chai-http");
let should = chai.should();
let { expect, assert } = require("chai");
chai.use(chaiHttp);

describe("Like", () => {
  it("It should like the post", (done) => {
    chai
      .request(server)
      .get("/api/reacts/like/628c529fe9dde6d88364e87a")
      .set(
        "x-auth-token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhhOGNhN2RiYWM1ZjE3YjJkZWJlOTkiLCJpYXQiOjE2NTMzNzcyNjJ9.kOFVpphjBHL6ycFUVqTEVOkAsI3120iFIpe4_IzSGK0"
      )
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
  it("It should get total likes of the post", (done) => {
    chai
      .request(server)
      .get("/api/reacts/628c529fe9dde6d88364e87a")
      .end((err, res) => {
        assert.equal(res.status, 200);

        done();
      });
  });
  it("It should not get total likes of the post which does not exist", (done) => {
    chai
      .request(server)
      .get("/api/reacts/628c529fe9ddd8837a")
      .end((err, res) => {
        assert.equal(res.status, 500);

        done();
      });
  });
  it("It should unlike the post", (done) => {
    chai
      .request(server)
      .get("/api/reacts/unlike/628c529fe9dde6d88364e87a")
      .set(
        "x-auth-token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhhOGNhN2RiYWM1ZjE3YjJkZWJlOTkiLCJpYXQiOjE2NTMzNzcyNjJ9.kOFVpphjBHL6ycFUVqTEVOkAsI3120iFIpe4_IzSGK0"
      )
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
  it("It should ge the post whose all comments isto e loaded", (done) => {
    chai
      .request(server)
      .get("/api/comments/628c529fe9dde6d88364e87a")
      .end((err, res) => {
        assert.equal(res.status, 200);

        done();
      });
  });
});
