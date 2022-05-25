const chai = require("chai");
let { expect, assert, should } = require("chai");
let chaihttp = require("chai-http");
const { response } = require("express");
const {
  dummyUser1,
  dummyUser2,
  dummyUserWithoutId,
  newFirstName,
  newLastName,
  newEmail,
  newBio,
  avatarFilePath,
} = require("../data/user-data");
const fs = require("fs");
chai.use(chaihttp);

describe("Checking with registered ID", () => {
  it("1 ) Testing if a user is registered or not", async () => {
    let res = await chai
      .request("http://localhost:8000/api/friends/user")
      .get(`/628b4a00faeef9823862c6d2`)
      .set(
        "x-auth-token",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNGEwMGZhZWVmOTgyMzg2MmM2ZDIiLCJpYXQiOjE2NTM0OTMxNTN9.53pDqvywO8m22d2sdSgmPBzqTDOd93vx2f0VWf3XweE"
        
      );
    assert.equal(res.status, 200);
  });
});

describe("Checking with a wrong ID", () => {
  it("2 ) Testing if a user is registered or not", async (done) => {
    let res = await chai
      .request("http://localhost:8000/api/friends/user")
      .get(`/628b4a00faeewwef9823862c6d2`)
      .set(
        "x-auth-token",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNGEwMGZhZWVmOTgyMzg2MmM2ZDIiLCJpYXQiOjE2NTM0OTMxNTN9.53pDqvywO8m22d2sdSgmPBzqTDOd93vx2f0VWf3XweE"
        
      );
    assert.equal(res.status, 200);
  });
});










describe("Freind Request Testing", () => {
  it("3 ) Testing with person A sending friend request to person B", async () => {
    let res = await chai
      .request("http://localhost:8000/api/friends/reject")
      .get(`/${dummyUser1.id}`)
      .set(
        "x-auth-token",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNGEwMGZhZWVmOTgyMzg2MmM2ZDIiLCJpYXQiOjE2NTM0OTMxNTN9.53pDqvywO8m22d2sdSgmPBzqTDOd93vx2f0VWf3XweE"
        
      );
    assert.equal(res.status, 200);
  });


  describe("Freind Request Testing", () => {
    it("4 ) Testing with person A reject friend request of person B", async () => {
      let res = await chai
        .request("http://localhost:8000/api/friends/reject")
        .get(`/${dummyUser1.id}`)
        .set(
          "x-auth-token",
           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNGEwMGZhZWVmOTgyMzg2MmM2ZDIiLCJpYXQiOjE2NTM0OTMxNTN9.53pDqvywO8m22d2sdSgmPBzqTDOd93vx2f0VWf3XweE"
          
        );
      assert.equal(res.status, 200);
    });
  });

});

describe("Freind Request Testing", () => {
  it("5 ) Testing with person A remove friend request of person B", async () => {
    let res = await chai
      .request("http://localhost:8000/api/friends/reject")
      .get(`/${dummyUser1.id}`)
      .set(
        "x-auth-token",
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNGEwMGZhZWVmOTgyMzg2MmM2ZDIiLCJpYXQiOjE2NTM0OTMxNTN9.53pDqvywO8m22d2sdSgmPBzqTDOd93vx2f0VWf3XweE"
        
      );
    assert.equal(res.status, 200);
  });
});
