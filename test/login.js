let chai = require("chai");
let server = require("../app");
let chaiHttp = require("chai-http");
const { oldUser, nonUser, loginEmptyFields } = require("../data/auth-data");
let should = chai.should();
chai.use(chaiHttp);

describe("Users", () => {
  describe("POST users/signin", () => {
    it("it should allow a user with correct credential to sign in", (done) => {
      let user = {
        email: "haseeb@gmail.com",
        password: "haseeb1122",
      };
      chai
        .request(server)
        .post("/api/users/signin")
        .send(oldUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.should.have.property("errors");
          // res.body.errors.should.have.property('pages');
          // res.body.errors.pages.should.have.property('kind').eql('required');
          done();
        });
    });
  });
});
