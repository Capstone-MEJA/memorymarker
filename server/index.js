// main entry point for backend server

const PORT = process.env.PORT || 8080;
const app = require("./app");
const mongoose = require("mongoose");
const password = process.env.MONGODB_ATLAS_PASSWORD;

const uri = `mongodb+srv://makers:${password}@memory-marker.sdm16jf.mongodb.net/?retryWrites=true&w=majority`;

/**
 * Intializes connection with MongoDB database
 * On main branch, connects via local MongoDB called memorymarker
 * On deployed branch, connects via MongoDB Atlas called memory-marker
 */

const init = async () => {
  try {
    await mongoose.connect(uri);
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
