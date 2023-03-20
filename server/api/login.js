const bcrypt = require("bcrypt");
const Joi = require("joi");
const User = require("../models/User");
const genAuthToken = require("../utils/genAuthToken");
const router = require("express").Router();

// POST route to /api/login
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
    // if the user does not exists
    // send back that the username or password is invalid
    if (!user) {
      return res.status(400).send("Invalid username or password");
    }

    // compares the logging in password to the databse password
    const isValid = await bcrypt.compare(req.body.password, user.password);

    // if the validation check fails
    // send back that the username or password is invalid
    if (!isValid) {
      return res.status(400).send("Invalid username or password");
    }

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
