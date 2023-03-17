const router = require('express').Router();
const { useLoadScript} = require("@react-google-maps/api");
module.exports = router;


router.get("/", (req, res, next) => {
    res.send(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)   
})