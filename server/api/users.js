const router = require("express").Router();
const User = require("../models/User");
const userVerification = require("./verification")

// GET all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.send(users);
    console.log(users);
  } catch (err) {
    next(err);
  }
});

// GET single user
router.get("/:_id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// POST
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// PUT
router.put("/", userVerification, async (req, res, next) => {
  try {
    console.log(req.body)
    await User.updateOne({ _id: req.body._id }, req.body);
    const user = await User.findById(req.body._id)
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
