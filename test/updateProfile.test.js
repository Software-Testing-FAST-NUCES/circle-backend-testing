const chai = require("chai");
let { expect, assert, should } = require("chai");
let chaihttp = require("chai-http");
const { response } = require("express");
const {
  dummyUser,
  dummyUserWithoutId,
  newFirstName,
  newLastName,
  newEmail,
  newBio,
  avatarFilePath,
} = require("../data/user-data");
const fs = require("fs");
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
      "bio",
      "avatar"
    );
  });
  it("2 ) Testing if the update first name API is working properly", async () => {
    let res = await chai
      .request("http://localhost:8000/api/users")
      .put("/edit")
      .send({ ...dummyUserWithoutId, firstname: newFirstName })
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
      "bio",
      "avatar"
    );
    assert.equal(res.body.firstname, newFirstName);
  });
  it("3 ) Testing if the updated last name API is working properly", async () => {
    let res = await chai
      .request("http://localhost:8000/api/users")
      .put("/edit")
      .send({ ...dummyUserWithoutId, lastname: newLastName })
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
      "bio",
      "avatar"
    );
    assert.equal(res.body.lastname, newLastName);
  });
  it("4) Testing if the updated email API is working properly", async () => {
    let res = await chai
      .request("http://localhost:8000/api/users")
      .put("/edit")
      .send({ ...dummyUserWithoutId, email: newEmail })
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
      "bio",
      "avatar"
    );
    assert.equal(res.body.email, newEmail);
  });
  it("5) Testing if the updated Bio API is working properly", async () => {
    let res = await chai
      .request("http://localhost:8000/api/users")
      .put("/edit")
      .send({ ...dummyUserWithoutId, bio: newBio })
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
      "bio",
      "avatar"
    );
    assert.equal(res.body.bio, newBio);
  });
  it("6) Testing if the updated Avatar API is working properly", async () => {
    let res = await chai
      .request("http://localhost:8000/api/users")
      .put("/edit")
      .field("firstname", "Faiq")
      .field("lastname", "Rauf12")
      .field("email", "faiq@gmail.com")
      .field("dob", "2022-05-18")
      .field("bio", " ")
      .attach("avatar", fs.readFileSync(avatarFilePath), dummyUser.avatar)
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
      "bio",
      "avatar"
    );
    assert.match(res.body.avatar, /^avatar/);
  });
});
