const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Name: { type: String, required:true, },
  Published: { type: Number,required: true },
  Author: { type: String, required: true },
  Domain: { type: String, required: true },
  isAvailable: {type:Boolean, required:true}
});

const bookModel = mongoose.model("Books", bookSchema);

module.exports = bookModel;