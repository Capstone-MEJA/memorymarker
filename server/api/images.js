const router = require("express").Router();
const imgSchema = require("../models/Image");
const path = require("path");
const fs = require("fs");
const Post = require("../models/Post");
const Image = require("../models/Image");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/api/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

/* 
When you submit image, it hits this route;

Before it goes into the body of the function, it has to pass middleware (multer);

Multer saves the image to a specific folder (i.e., uploads folder);

Once you hit the function, fs.readFileSync() locates the file and converts it into a Buffer (think like a zip file, easier to store);
contentType specifies what kind of image file

Mongo turns the Buffer into a string
*/
router.post("/", upload.single("image"), async (req, res, next) => {
  if (req.body.postId) {
    const post = await Post.findById(req.body.postId);

    if (post.imageId) {
      await Image.deleteOne({ _id: post.imageId });
    }
  }

  const obj = {
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  imgSchema.create(obj).then((item) => {
    res.send(item._id);
  });
});

router.delete("/:id", async (req, res, next) => {
  await Image.deleteOne({ _id: req.params.id });
  res.sendStatus(200);
});

module.exports = router;
