const path = require("path");
const express = require("express");
const morgan = require("morgan");
const User = require("./models/User");
const app = express();
require("dotenv").config();
module.exports = app;

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// testing compared passwords:
// const test = async (username, password) => {
//   const user = await User.findOne({ username: username });
//   const result = await user.comparePassword(password);
//   console.log(result);
// };
// test("alicia", "123"); // true
// test("alicia", "1234"); // false

// api routes
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
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

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
