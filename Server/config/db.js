const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.URL;

const connectDB = () => {
  mongoose.connect(mongoUrl);
};

module.exports = { connectDB };
