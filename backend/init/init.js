const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const Task = require("../models/listing");
const User = require("../models/user"); // assuming you have a User model

const DB_URL = "mongodb://localhost:27017/TaskApp"

const main = async ()=>{
    await mongoose.connect(DB_URL);
    console.log("connected to database");
}

const getData = async()=> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}

const getUsers = async()=> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

async function init() {
    await main();
    const tasks = await getData();
    const users = await getUsers();

    // Save users to the database
    for (const user of users) {
        const newUser = new User({
            userId: user.id,
            name: user.username,
            email: user.email
        });
        try {
            await newUser.save();
            console.log(`User saved: ${user.name}`);
        } catch (err) {
            console.error(err);
        }
    }

    // Save tasks to the database
    for (const task of tasks) {
        const newTask = new Task({
            _id: task.id,
            userId: task.userId,
            taskTitle: task.title,
            taskDesc: task.body
        });
        try {
            await newTask.save();
            console.log(`Task saved: ${task.title}`);
        } catch (err) {
            console.error(err);
        }
    }
}

init();