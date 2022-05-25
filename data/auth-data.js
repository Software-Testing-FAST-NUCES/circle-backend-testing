module.exports = {
  newUser: {
    firstname: "Test",
    lastname: "1",
    email: "test1@gmail.com",
    dob: "2022-05-18",
    password: "11223344",
  },
  oldUser: {
    email: "haseeb@gmail.com",
    password: "haseeb1122",
  },
  currentUser: {
    firstname: "Haseeb",
    lastname: "Shams",
    email: "haseeb@gmail.com",
    dob: "2022-05-04T00:00:00.000+00:00",
  },
  nonUser: {
    email: "haseeb@gmail2.com",
    password: "haseeb1122",
  },
  loginEmptyFields: {
    email: "",
    password: "",
  },
  signUpEmptyFields: {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    dob: "",
  },
};
