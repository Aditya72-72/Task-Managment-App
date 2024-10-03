const express = require("express");
const { CreateUser, GetUser } = require("../controllers/Users");
const router = express.Router();
const passport = require("passport");

router.post("/", CreateUser);

router.post("/login", (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      req.user = user;
      next();
    })(req, res, next);
  }, GetUser);

  router.get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.status(200).json({ message: 'Logged out successfully' });
    });
  });
  
module.exports = router;