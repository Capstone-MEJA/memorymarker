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

    if (!user) return res.status(400).send("Invalid username or password");

    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (!isValid) return res.status(400).send("Invalid username or password");

    const token = genAuthToken(user);
    res.send(token);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
