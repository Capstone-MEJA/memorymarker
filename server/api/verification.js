const User = require("../models/User");

const userVerification = async (req, res, next) => {
  try {
    //token comes from headers, which we sent inside the corresponding thunk
    //so if you aren't sure, check your user slice
    const token = req.headers.authorization;
    //findByToken will give us back either null, or an object
    //with the requester's information
    let {_id} = await User.findByToken(token);
    //_id by default is an OBJECT not a string, so we have to use
    //.toString() to make it into a string
    _id = _id.toString()
    //dbId can come from two different places
    // req.body if you are using put or post
    // req.params if you are using delete or get
    let dbId = ""
    if(req.method === "PUT" || req.method === "POST"){
       dbId = req.body._id
    } else {
        dbId = req.params._id
    }
    // dbId is the id of the account you are trying to change
    //_id is the YOUR (REQUESTER's) id
    if(dbId === _id){
        next()
    } else {
        throw new Error("Unauthorized")
    }

  } catch (err) {
    next(err);
  }
};

module.exports = userVerification;

// token = window.localStorage.getItem()

// parameter1 = url  parameter 2 = req.headers
// axios.get("endpoint_url", {headers: {authorization: token}})
// axios.delete("endpoint_url", {headers: {authorization: token})

// parameters1 = url parameter2 = req.body paramter3 = req.headers
// axios.post("endpoint_url", {username: username, password: password}, {headers:{authorization:token}})
// axios.put("endpoint_url", {username: username, password: password}, {headers: {authorization: token}})


