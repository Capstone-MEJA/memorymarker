const bcrypt = require("bcrypt");
const Joi = require("joi");
const User = require("../models/User");
const genAuthToken = require("../utils/genAuthToken");
const router = require("express").Router();

router.post("/", async (req, res, next) => {
  try {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ username: req.body.username });

    if (user) return res.status(400).send("User already exists");

    user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    user = await user.save();

    const token = genAuthToken(user);

    res.send(token);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
