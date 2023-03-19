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

// POST
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    res.send(user)
  } catch (err) {
    next(err);
  }
}) 

// PUT
router.put("/", async (req, res, next) => {
  try {
    const user = await User.updateOne(
      {_id: "someID"},
      req.body
    );
    res.send(user)
  } catch (err) {
    next(err);
  }
}) 

// DELETE
router.delete("/", async (req, res, next) => {
  try {
    const user = await User.deleteOne(
      {_id: "someID"}
    );
    res.send(user)
  } catch (err) {
    next(err);
  }
}) 

module.exports = router;
