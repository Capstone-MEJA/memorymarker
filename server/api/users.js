const router = require("express").Router();
const User = require("../models/User");

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

module.exports = router;
