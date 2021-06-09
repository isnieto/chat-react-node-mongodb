// To verify a Signup/register action, we need to check username and email are not
// already in use in database

// Load Game play model
const ChatUser = require("../models/user.model.js");

const checkDuplicates = async (req, res, next) => {
  try {
    if (
      Object.keys(req.body).length === 0 ||
      req.body.name === "" ||
      req.body.email === ""
    ) {
      res
        .status(400)
        .send({ message: "Sorry, username and email are needed to signUp!" });
    } else {
      // Check in database if username already exists
      ChatUser.findOne({ username: `${req.body.name}` }, (err, username) => {
        // If Name no exists response is false
        if (err) {
          res = res.status(500).send({ message: err });
          return res;
        }
        // Username already in database

        if (username !== null) {
          let x = {
            message: `Failed! Username ${req.body.name} is already in use!`,
          };
          res.status(400).send({
            message: `Failed! Username ${req.body.name} is already in use!`,
          });
          return;
        }

        // Check in database if email already there
        ChatUser.findOne({ email: req.body.email }, (err, email) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          if (email) {
            res.status(400).send({
              message: `Failed! Email ${req.body.email} is already in use!`,
            });
            return;
          }
          next();
        });
      });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = checkDuplicates;
