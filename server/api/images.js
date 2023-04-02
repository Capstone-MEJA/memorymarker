const router = require("express").Router();
const imgSchema = require("../models/Image");
const path = require("path");
const fs = require("fs");
const Post = require("../models/Post")
const Image = require("../models/Image")

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

// router.get("/", (req, res) => {
//   imgSchema.find({}).then((data, err) => {
//     if (err) {
//       console.log(err);
//     }
//     res.render("imagepage", { items: data });
//   });
// });

/* 
When you submit image, it hits this route;

Before it goes into the body of the function, it has to pass middleware (multer);

Multer saves the image to a specific folder (i.e., uploads folder);

Once you hit the function, fs.readFileSync() locates the file and converts it into a Buffer (think like a zip file, easier to store);
contentType specifies what kind of image file

Mongo turns the Buffer into a string
*/
router.post("/", upload.single("image"), async (req, res, next) => {
  const post = await Post.findById(req.body.postId)

  if(post.imageId){
    await Image.deleteOne({_id: post.imageId})
  }
//delete from post
    //delete from object
    //create new object
    //send newobject id

    //update object
    //

  const obj = {
    // get post
    // get object

    

    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  imgSchema.create(obj).then((item) => {
    //     if (err) {
    //       console.log(err);
    //       //   res.sendStatus(500);
    //     } else {
    //       item.save();
    //       res.send(item);
    //     }
    //   });
    console.log(item._id, typeof item._id)
    res.send(item._id);
  });
});

// router.put("/", upload.single("image"), async (req, res, next) => {
//   const post = await Post.findOne({_id: req.body.postId})
//   const image = await Image.findOne({_id: post.imageId})

//   image._doc.img.data = fs.readFileSync(
//           path.join(__dirname + "/uploads/" + req.file.filename)
//         ),
    
//   image.save()

//   res.send(image._id)
//   // const obj = {
//   //   // get post
//   //   // get object

//   //   //delete from post
//   //   //delete from object
//   //   //create new object
//   //   //send newobject id

//   //   //update object
//   //   //

//   //   img: {
//   //     data: fs.readFileSync(
//   //       path.join(__dirname + "/uploads/" + req.file.filename)
//   //     ),
//   //     contentType: "image/png",
//   //   },
//   // };
//   // imgSchema.create(obj).then((item) => {
//   //   //     if (err) {
//   //   //       console.log(err);
//   //   //       //   res.sendStatus(500);
//   //   //     } else {
//   //   //       item.save();
//   //   //       res.send(item);
//   //   //     }
//   //   //   });
//   //   console.log(item._id, typeof item._id)
//   //   res.send(item._id);
//   // });
// });

module.exports = router;
