const router = require("express").Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");

const User = require("../models/User");
const genAuthToken = require("../utils/genAuthToken");

/**
 * Route serving register form to /api/register
 * @name post/register
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {number} JSON web token
 */

router.post("/", async (req, res, next) => {
  try {
    // validate the schema
    const schema = Joi.object({
      username: Joi.string().required().min(5).max(20),
      password: Joi.string().required().min(8),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });

    // if there is an error validating the schema
    // send back the error message

    if (error) {
      let errors = [];
      for (let i = 0; i < error.details.length; i++) {
        errors.push(error.details[i].message);
      }
      return res.status(400).send(errors);
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
