const router = require("express").Router();
module.exports = router;
const Post = require("../models/Post");
const User = require("../models/User");
const mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate("user");
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
    req.body.user = new mongoose.Types.ObjectId(req.body.user);
    console.log(req.body.user);
    // create new post
    const post = await Post.create(req.body);
    await post.populate("user");
    //find user associated with this post
    const user = await User.findById(req.body.user);
    // push postId into user object and save
    user.posts.push(post._id);
    user.save();
    res.send(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.put("/:_id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params._id);

    if (req.body.like) {
      post.favoriteCount = post.favoriteCount + req.body.like;
      post.favoritedUsers.push(req.body.userId);
      // await post.save();
      // res.send(post);
    } else {
      if (req.body.title !== post.title) {
        post.title = req.body.title;
        // await post.save();
      }

      if (req.body.description !== post.description) {
        post.description = req.body.description;
        // await post.save();
      }
      // await Post.updateOne({ _id: req.params._id }, req.body);
      // const post = await Post.findById(req.params._id);
      // await post.populate("user");
      // res.send(post);
    }
    await post.save();
    await post.populate("user");
    res.send(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const deletePost = await Post.findById(req.params._id);
    const user = await User.findById(deletePost.user);
    user.posts = user.posts.filter(
      (post) => post._id.toString() !== deletePost._id.toString()
    );
    await user.save();
    await Post.deleteOne({ _id: req.params._id });
    res.send(deletePost);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
