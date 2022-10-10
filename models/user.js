const mongoose = require("mongoose");
const schema = mongoose.Schema();
const UserSchema = {
  firstname: String,
  lastname: String,
  age: Number,
};
const user = mongoose.model("user", UserSchema);
module.exports = user;
