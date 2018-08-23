const mongoose = require("mongoose");
const express = require("express");
const app = express.Router();

const User = require("../../models/User");

app.get("/create-user", function(req, res) {
  res.sendfile("./public/create-user.html");
});

app.post("/create-user", (req, res) => {
  var newUser = new User({
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.address,
    password: req.body.password,
    email: req.body.email
  });
  newUser.save().then(user => res.json(user));
});

module.exports = app;
