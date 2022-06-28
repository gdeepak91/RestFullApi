// import expressjs
const express = require("express");
// import connection
require("./conn/conn");
// import dotenv file
require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
// import router
const Routes = require("./routes/routes");
app.use("/api", Routes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
