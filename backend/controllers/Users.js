const express = require("express");
const User = require("../models/user.js");

module.exports.CreateUser = async (req,res) => {
    let { username, email, password } = req.body;
    console.log(req.body);
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    res.json(registeredUser);
}

module.exports.GetUser = (req,res) => {
    if (req.user) {
        res.json(req.user);
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
}