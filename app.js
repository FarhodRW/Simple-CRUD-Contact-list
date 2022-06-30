const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const { router } = require("./router");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/employee")
  .then(() => console.log("Connected to database 💾"))
  .catch(() => console.log("Can't connect to the database "));

mongoose.set("debug", true);
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(3001, () => {
  console.log("Server is listening on port 3001 😎");
});
