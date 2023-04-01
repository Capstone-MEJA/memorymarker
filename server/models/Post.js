const mongoose = require("mongoose");
const fs = require("fs")

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
    default: () => Date.now(),
  },
  timeStamp: {
    type: String,
    immutable: true,
    default: () => Date(),
  },
  favoriteCount: {
    type: Number,
    default: 0,
  },
  favoritedUsers: [{
    type: String
  }],
  imageId: {
    type: mongoose.Types.ObjectId,
    ref: "Image"
  },
  imageString:{
    type: String
  }
});

postSchema.methods.convertImage = function(){

  // console.log(this.imageId.img.data.buffer)
  // console.log(Buffer.from(this.imageId.img.data.buffer, 'binary').toString("base64"))
  // console.log(this.imageId.img.data.buffer.toString("base64"))
  // console.log(fs.writeFileSync("new-path.jpg", new DataView(this.imageId.img.data.buffer)))
  // console.log(this.imageId.img.data.buffer)
  
  if(this.imageId){
    const convert = async () => {
      this.imageString = Buffer.from(this.imageId.img.data.buffer, 'binary').toString("base64")
      await this.save()
    }
    convert()
  }
}

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
