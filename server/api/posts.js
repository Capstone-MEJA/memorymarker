const router = require("express").Router();

const Post = require("../models/Post");
const User = require("../models/User");

/**
 * Route serving all posts to /api/posts
 * @name get/posts
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object[]} Array of all posts in database
 */

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate("user");
    res.json(posts);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/**
 * Route serving a single post to /api/posts/<id>
 * @name get/post
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object} Returns a single post based on the id passed into the request params
 */

router.get("/:_id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params._id);
    res.json(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/**
 * Route to add a single post to /api/posts
 * @name post/post
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object} Returns the post created
 */

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    const user = await User.findById(req.body.user);
    user.posts.push(post._id);
    user.save();
    res.send(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/**
 * Route to update a single post to /api/posts/<id>
 * @name put/post
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object} Returns the updated post
 */

router.put("/:_id", async (req, res, next) => {
  try {
    await Post.updateOne({ _id: req.params._id }, req.body);
    const post = await Post.findById(req.params._id);
    await post.populate("user");
    res.send(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/**
 * Route to delete a single post to /api/posts/<id>
 * @name delete/post
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {Object} Returns the deleted post
 */

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

module.exports = router;
