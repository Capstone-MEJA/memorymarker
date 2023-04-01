const router = require("express").Router();
const imgSchema = require("../models/Image");
const path = require("path");
const fs = require("fs");

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

router.get("/", (req, res) => {
  imgSchema.find({}).then((data, err) => {
    if (err) {
      console.log(err);
    }
    res.render("imagepage", { items: data });
  });
});

router.post("/", upload.single("image"), (req, res, next) => {
  console.log("test");
  const obj = {
    // name: req.body.name,
    // desc: req.body.desc,
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
    res.send(item._id);
  });
});

module.exports = router;
