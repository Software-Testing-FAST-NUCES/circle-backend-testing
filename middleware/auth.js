const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(401).send("Access denied, no token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    console.log(ex);
    res.status(400).send("Invalid token.");
  }
}

module.exports = auth;
