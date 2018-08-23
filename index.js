const uniqid = require("uniqid");
const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const Encrypt = require("./encrypter");
const node = require("./routes/api/node");
const user = require("./routes/api/user");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Get db config
const db = require("./config/keys_dev").mongoURI;
// Connect to mongoose
mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

// @routes GET
// access public
// desc Landing page HTML
app.get("/", (req, res) => {
  res.sendfile("./public/index.html");
});

app.use("/api/user", user);
app.use("/api/node", node);

app.post("/myaction", function(req, res) {
  console.log("I was here");
  res.send('You sent the name "' + req.body.name + '".');
});

class Person {
  constructor(name, address, mobile, value) {
    this.name = name;
    this.address = address;
    this.mobile = mobile;
    this.value = value;
  }
}

let NodeNumber = 0; // will come from db;

class Node {
  constructor() {
    this.dateTime = new Date().getTime();
    this.NodeId = uniqid();
    this.childNodeId = [];
  }
}

function createNode(name, address, mobile, value) {
  let obj = new Node();
  let data = new Person(name, address, mobile, value);
  obj.data = Encrypt.encrypt(data, obj.NodeId);
  obj.NodeNumber = NodeNumber;
  NodeNumber += 1;
  return obj;
}

obj = createNode("aman", "Delhi", "83718312", "12");
// console.log(obj);

obj.data = Encrypt.decrypt(obj.data, obj.NodeId);
// console.log(obj);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
