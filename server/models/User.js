const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ]
});

/**
 * * Finds and returns a single user object based on the requested token
 * @param {string} token
 * @returns {Object} user object
 */
userSchema.statics.findByToken = async function (token) {
  try {
    const { _id } = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await this.findById(_id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    return null;
  }
};

const User = mongoose.model("User", userSchema);

// When you make a validation function, it needs to be attached to model, NOT schema
// When you manipulate data, you are changing model, not schema

// Checks to make sure username is between 5 and 20 characters
User.schema.path("username").validate(function (value) {
  if (value.length < 5 || value.length > 20) {
    throw new Error("Username needs to be between 5 and 20 characters");
  } else {
    return true;
  }
});

// Checks to make sure password is at least 8 characters
User.schema.path("password").validate(function (value) {
  if (value.length < 8) {
    throw new Error("Password needs to be at least 8 characters in length");
  } else {
    return true;
  }
});

module.exports = User;
