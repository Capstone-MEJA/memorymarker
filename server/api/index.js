const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
router.use("/maps", require("./maps"));
router.use("/auth", require("./auth"));
router.use("/register", require("./register"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
