const mongoose = require("mongoose");

//creating schema for the document
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
  },
);

//creating document/model
const Task = new mongoose.model("Task", taskSchema);

module.exports = Task;
