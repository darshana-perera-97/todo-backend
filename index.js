const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");

mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.b4ir7g9.mongodb.net/todo?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("Server runs in 3001");
});
