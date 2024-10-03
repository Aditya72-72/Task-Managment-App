const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    userId: {
      type: String,
      required: true
    },
    taskTitle: {
      type: String,
      required: true
    },
    taskDesc: {
      type: String,
      required: true
    }
  });

  const Task = mongoose.model('Task', taskSchema);

module.exports = Task;