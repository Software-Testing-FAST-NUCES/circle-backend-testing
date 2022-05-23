const chai = require("chai");
let { expect, assert, should } = require("chai");
let chaihttp = require("chai-http");
const { response } = require("express");
const { dummyUser } = require("../data/user-data");

chai.use(chaihttp);

describe("Update Profile Testing", () => {
  it("1 ) Testing if logged in user's data is being fetcehd", async () => {
    let res = await chai
      .request("http://localhost:8000/api/users")
      .get(`/${dummyUser.id}`)
      .set(
        "x-auth-token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNDE4NWQwOGUzYjhkNzhkNGQzYTUiLCJpYXQiOjE2NTMzMzYxNTZ9.YehVKCask5Nz_0JqxextT9W1pilbIJItTLHrq3759e0"
      );
    assert.equal(res.status, 200);
    expect(res.body).to.have.all.keys(
      "id",
      "firstname",
      "lastname",
      "email",
      "dob",
      "bio"
    );
    assert.include(res.body, dummyUser);
  });
});
