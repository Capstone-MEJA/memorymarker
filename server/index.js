const PORT = process.env.PORT || 8080;
const app = require("./app");
const mongoose = require("mongoose");

const init = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/memorymarker");
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
