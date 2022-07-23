const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
