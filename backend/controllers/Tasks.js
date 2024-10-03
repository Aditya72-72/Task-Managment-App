const express = require("express");
const mongoose = require("mongoose");
const Task = require("../models/listing");

module.exports.AllTasks = async (req, res) => {
    await Task.find({}).then(list => {
        return res.json(list);
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ message: 'Error fetching tasks', error: err.message });
    });
}

module.exports.NewTask = async (req,res) => {
    const createTask = req.body;
    const newListing = new Task(createTask);
    await newListing.save().then((task) => {
        res.json(task);
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error creating task' });
    });

}

module.exports.UpdateTask = async (req,res) => {
    const newtask = req.body;
    console.log(newtask);
    await Task.findByIdAndUpdate(newtask._id, newtask).then(task => {
        res.json(task);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error fetching tasks' });
    }); 
}

module.exports.SingleTask = async (req,res) => {
    await Task.findById(req.params.id).then(task => {
        res.json(task);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error fetching tasks' });
    });
}

module.exports.DeleteTask = async(req,res) => {
    await Task.findByIdAndDelete(req.params.id).then(task => {
        res.json()
    }).catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error fetching tasks' });
    });
}