const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 8000;
const tasksRouter = require("./routes/listing.js");
const usersRouter = require("./routes/users.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const session = require("express-session");

app.use(cors());
app.use(express.json());

const DB_URL = "mongodb://localhost:27017/TaskApp"

const main = async ()=>{
    await mongoose.connect(DB_URL);
}

main().then(()=>{
    console.log("connected to database");
})

const sessionOption = {
    secret : "akndjanwidnajksndawd",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true
    }
}

app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(PORT || 3000 , ()=>{
    console.log(`Server is running on port ${PORT}`);
})


app.use("/api", tasksRouter);
app.use("/api/user", usersRouter);


