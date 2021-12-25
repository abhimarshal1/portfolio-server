const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  designation: String,
});

module.exports = mongoose.model("App", AppSchema);
