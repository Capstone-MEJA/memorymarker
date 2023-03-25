const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
  // createdAt: {
  //   type: Date,
  //   immutable: true,
  //   default: () => Date.now(),
  // },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

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
    // throw error;
    return null;
  }
};

const User = mongoose.model("User", userSchema);

// when you make a validation function, it needs to be attached to model, NOT schema
// when you manipulate data, you are changing model, not schema
User.schema.path("username").validate(function (value) {
  if (value.length < 5 || value.length > 20) {
    throw new Error("Username needs to be between 5 and 20 characters");
  } else {
    return true;
  }
});

User.schema.path("password").validate(function (value) {
  if (value.length < 8) {
    throw new Error("Password needs to be between 8 and 20 characters");
  } else {
    return true;
  }
});

// *** only needed for seeded users - start
// before the user's password is saved to the database,
// hash the password with 5 salt rounds
// userSchema.pre("save", function (next) {
//   if (this.isModified("password")) {
//     bcrypt.hash(this.password, 5, (err, hash) => {
//       if (err) return next(err);
//       this.password = hash;
//       next();
//     });
//   }
// });

// // compares user's password with hashed password
// // returns true only if the passwords match
// userSchema.methods.comparePassword = async function (password) {
//   if (!password) throw new Error("Password is missing, cannot compare");
//   try {
//     const result = await bcrypt.compare(password, this.password);
//     return result;
//   } catch (err) {
//     console.log("Error while comparing password", err.message);
//   }
// };
// *** only needed for seeded users - end

// class methods
// userSchema.statics.authenticate = async function ({ username, password }) {
//   const user = await this.findOne({ where: { username } });
//   if (!user || !(await user.correctPassword(password))) {
//     const error = Error("Incorrect username/password");
//     error.status = 401;
//     throw error;
//   }
//   return user.generateToken();
// };

module.exports = User;
