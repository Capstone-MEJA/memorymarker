const router = require("express").Router();

// All routes mounted on /api/<route>
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
router.use("/maps", require("./maps"));
router.use("/register", require("./register"));
router.use("/login", require("./login"));

// If there is a request to an endpoint that had not been defined
// return a 404 error
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
