const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const userVerification = require("./verification");

/**
 * Route serving all users to /api/users
 * @name get/users
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object[]} Array of all users in database
 */

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({}).select("_id username posts");
    res.send(users);
    console.log(users);
  } catch (err) {
    next(err);
  }
});

/**
 * Route serving a single user to /api/users/<id>
 * @name get/user
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object} Returns a single user based on the id passed into the request params
 */

router.get("/:_id", async (req, res, next) => {
  try {
    console.log(req.params._id);
    const user = await User.findById(req.params._id)
      .populate("posts")
      .select("_id username posts");
    res.send(user);
  } catch (err) {
    next(err);
  }
});

/**
 * Route to update a single user to /api/users/<id>
 * @name put/user
 * @param {string} path - Express path
 * @param {callback} middleware - Custom middleware
 * @param {callback} middleware - Express middleware
 * @returns {Object} Returns the updated user
 */

router.put("/", userVerification, async (req, res, next) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    await User.updateOne({ _id: req.body._id }, req.body);
    const user = await User.findById(req.body._id).select("_id username posts");
    res.send(user);
  } catch (err) {
    next(err);
  }
});

/**
 * Route to delete a single user to /api/users/<id>
 * @name delete/user
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object} Returns the deleted user
 */

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
