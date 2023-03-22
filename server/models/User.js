const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   immutable: true,
  //   default: () => Date.now(),
  // },
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Post",
  },
});

// // *** only needed for seeded users - start
// // before the user's password is saved to the database,
// // hash the password with 5 salt rounds
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
// // *** only needed for seeded users - end

module.exports = mongoose.model("User", userSchema);
