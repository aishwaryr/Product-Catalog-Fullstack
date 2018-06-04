const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const productSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  picture: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
