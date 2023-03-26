const router = require("express").Router();
const User = require("../models/User");
const userVerification = require("./verification");
const bcrypt = require("bcrypt");

// GET all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({}).select("_id username posts");
    res.send(users);
    console.log(users);
  } catch (err) {
    next(err);
  }
});

// GET single user
router.get("/:_id", async (req, res, next) => {
  try {
    console.log(req.params._id)
    const user = await User.findById(req.params._id).populate("posts").select("_id username posts");
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// POST
// router.post("/", async (req, res, next) => {
//   try {
//     const user = await User.create({
//       username: req.body.username,
//       password: req.body.password,
//     })
//     res.send(user);
//   } catch (err) {
//     next(err);
//   }
// });

// PUT
router.put("/", userVerification, async (req, res, next) => {
  try {
    if (req.body.password) {
      // sets 10 salt rounds
      const salt = await bcrypt.genSalt(10);

      // hashes the user's password with 10 salt rounds
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    await User.updateOne({ _id: req.body._id }, req.body);
    const user = await User.findById(req.body._id).select("_id username posts");
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:_id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id);
    await User.deleteOne({ _id: req.params._id });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
