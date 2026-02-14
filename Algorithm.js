const mongoose = require("mongoose");

const algorithmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  code: String,
  language: {
    type: String,
    default: "JavaScript",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Algorithm", algorithmSchema);
