const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Number,
    immutable: true,
    default: () => Date.now()
  },
  timeStamp: {
    type: String,
    immutable: true,
    default: () => Date()
  },
  favorite: {
    type: Number,
    default: 0
  }
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
