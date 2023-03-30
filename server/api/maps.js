const router = require("express").Router();

/**
 * Route serving google map to /api/maps
 * @name get/map
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @return {string} google maps API key
 */

router.get("/", (req, res, next) => {
  res.send(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
});

module.exports = router;
