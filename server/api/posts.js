const router = require("express").Router();
module.exports = router;
const Post = require("../models/Post");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      //   attributes: ['title', 'description']
    });
    res.json(posts);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/:_id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params._id);
    res.json(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.send(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const post = await Post.updateOne({ _id: "someId" }, req.body);
    res.send(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const post = await Post.deleteOne({ _id: "someId" });
    res.send(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
