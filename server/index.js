// main entry point for backend server

const PORT = process.env.PORT || 8080;
const app = require("./app");
const mongoose = require("mongoose");

/**
 * Intializes connection with MongoDB database
 * On main branch, connects via local MongoDB called memorymarker
 * On deployed branch, connects via MongoDB Atlas called memory-marker
 */

const init = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/memorymarker");
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
