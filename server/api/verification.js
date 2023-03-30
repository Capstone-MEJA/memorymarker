const User = require("../models/User");

/**
 * * Custom middleware that checks to see if the user trying to update account information is the same user that owns that account they are attempting to update
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Express.NextFunction} next
 */

const userVerification = async (req, res, next) => {
  try {
    // set token to the header sent from the updateUser() thunk in userSlice.tsx
    const token = req.headers.authorization;
    // find the user object using their token
    // destructure out the user's id
    let { _id } = await User.findByToken(token);
    // convert the id to a string
    _id = _id.toString();
    // if method is POST or PUT, set dbId to id from the request body
    // if method is GET or DELETE, set dbId to id from the request params
    let dbId = "";
    if (req.method === "PUT" || req.method === "POST") {
      dbId = req.body._id;
    } else {
      dbId = req.params._id;
    }
    // if the dbId (requested account to change) is the _id (requester's id)
    // continue on with the request
    // otherwise throw an error
    if (dbId === _id) {
      next();
    } else {
      throw new Error("Unauthorized");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = userVerification;
