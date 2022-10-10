if (process.env.ENV === "dev") require("dotenv").config();
const express = require("express");
const app = express();
const user = require("./models/user");
app.use(express.json());

const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./config/.env" });

const port = 5000;
mongoose.connect(
  "mongodb+srv://Maysamchaari:MAYSOUM2016@cluster0.wtv0stv.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("database is connected")
);
app; //add user
app.post("/addUser", (req, res) => {
  let addUser = new user(req.body);
  addUser.save((err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});
//all user
app.get("/getUsers", (req, res) => {
  user.find((err, data) => {
    if (err) throw err;
    else res.json(data);
  });
});
//update user
app.put("/updateUser/:id", (req, res) => {
  user.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    (err, data) => {
      if (err) throw err;
      else {
        res.json(data);
      }
    }
  );
});
//delete user
app.delete("/deleteUser/:id", (req, res) => {
  user.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) throw err;
    else {
      res.json({ msg: "user deleted", data });
    }
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else console.log("the server is working");
});
