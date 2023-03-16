const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  latitude: Number,
  longitude: Number,
})

module.exports = mongoose.model('Post', postSchema)
