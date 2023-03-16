const router = require('express').Router();
module.exports = router;
const Post  = require('../models/Post');

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    //   attributes: ['title', 'description']
    })
    res.json(posts)
  } catch (err) {
    console.log(err)
    next(err)
  }
})