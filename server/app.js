const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

// Morgan intercepts all requests & responses
// and logs the request & response information
app.use(morgan("dev"));

// Parses incoming requests with JSON payloads
app.use(express.json());

// All API routes are mounted on /api
app.use("/api", require("./api"));

// All GET requests to / will render /public/index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// Static file-serving middleware for rendering images in /public folder
app.use(express.static(path.join(__dirname, "..", "public")));

// Any remaining requests will send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    console.log("path name", req.path);
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Sends /public/index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// const upload = multer({ storage: storage });

// Error handling endware
app.use((err, req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
