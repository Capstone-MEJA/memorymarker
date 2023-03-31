const JWT = require("jsonwebtoken");

/**
 * * Creates a token for a user that is signed using a secret key to verify the integrity of the request
 * @param {Object} user
 * @returns {string} token
 */

const genAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET;

  const token = JWT.sign(
    {
      _id: user._id,
      username: user.username,
    },
    secretKey
  );
  return token;
};

module.exports = genAuthToken;
