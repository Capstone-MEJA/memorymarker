const bcrypt = require("bcrypt");
const Joi = require("joi");
const User = require("../models/User");
const genAuthToken = require("../utils/genAuthToken");
const router = require("express").Router();

// POST route to /api/register
router.post("/", async (req, res, next) => {
  try {
    // validate the schema
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);

    // if there is an error validating the schema
    // send back the error message
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // try to find the user in the database
    let user = await User.findOne({ username: req.body.username });
    // if the user exists
    // send back that a user already exists
    if (user) {
      return res.status(400).send("User already exists");
    }

    // sets the username and password on the user
    user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    // sets 10 salt rounds
    const salt = await bcrypt.genSalt(10);

    // hashes the user's password with 10 salt rounds
    user.password = await bcrypt.hash(user.password, salt);

    // saves the user's info to the database
    user = await user.save();

    // generate a new json web token
    const token = genAuthToken(user);

    // send back the jwt
    res.send(token);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
