const JWT = require("jsonwebtoken");
const { model } = require("mongoose");

const genAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET;

  const token = JWT.sign(
    {
      //   _id: user._id,
      username: user.username,
    },
    secretKey
  );
  return token;
};

module.exports = genAuthToken;
