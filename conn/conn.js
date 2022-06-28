const mongoose = require("mongoose");
// require("dotenv").config();
// const conn = process.env.db_url;
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Ok");
  })
  .catch((err) => {
    console.log("Failed");
  });
