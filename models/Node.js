const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Node Model
const NodeSchema = new Schema({
  val: {
    type: String,
    required: true
  },
  nodeId: {
    type: Schema.Types.ObjectId
  },
  parentNodeId: {
    type: Schema.Types.ObjectId
  },
  owner: {
    type: String,
    required: true
  },
  nodeNumber: {
    type: Number
  }
});

module.exports = Node = mongoose.model("node", NodeSchema);
