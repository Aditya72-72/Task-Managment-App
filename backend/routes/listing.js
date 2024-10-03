const express = require("express");
const { NewTask, AllTasks, UpdateTask, SingleTask, DeleteTask } = require("../controllers/Tasks");
const router = express.Router();

router.route("/tasks").get(AllTasks).post(NewTask);

router.route("/tasks/:id").get(SingleTask).put(UpdateTask).delete(DeleteTask);

module.exports = router ;