const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

exports.createToken = (data) =>
  jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 3600 });
