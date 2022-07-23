const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const Todos = require("./models/ToDo");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.b4ir7g9.mongodb.net/todo?retryWrites=true&w=majority"
);

app.get("/getTodo", (req, res) => {
  Todos.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createTodo", async (req, res) => {
  const todo = req.body;
  const newUser = new Todos(todo);
  await newUser.save();

  res.json(todo);
});

app.listen(3001, () => {
  console.log("Server runs in 3001");
});
