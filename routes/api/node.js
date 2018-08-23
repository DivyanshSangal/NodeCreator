const express = require("express");
const app = express.Router();
const mongoose = require("mongoose");

const Node = require("../../models/Node");
const User = require("../../models/User");

// @routes GET api/
// access public
// desc Route to Create Node page
app.get("/create-node", (req, res) => {
  res.sendfile("./public/create-node.html");
});

// @routes GET
// access public
// desc Route to Add Node page
app.get("/add-node", (req, res) => {
  res.sendfile("./public/add-node.html");
});

// @routes GET
// access public
// desc Route to Delete Node page
app.get("/delete-node", (req, res) => {
  res.sendfile("./public/delete-node.html");
});

// @routes GET
// access public
// desc Route to transfer ownership page
app.get("/transfer-node", (req, res) => {
  res.sendfile("./public/transfer-node.html");
});

// @routes GET
// access public
// desc Route to Merge Node page
app.get("/merge-node", (req, res) => {
  res.sendfile("./public/merge-node.html");
});

// @routes GET
// access public
// desc Route to Finding the longest chain page
app.get("/longest-chain", (req, res) => {
  res.sendfile("./public/longest-chain.html");
});

// @routes POST
// access public
// desc create new node
app.post("/create-node", (req, res) => {
  const newNode = new Node({
    val: req.body.val,
    owner: req.body.owner
  });
  newNode.save().then(user => res.json(user));
});

module.exports = app;
