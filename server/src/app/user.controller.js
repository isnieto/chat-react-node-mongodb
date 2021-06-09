// Functions for registering a new user and for authorized login
// Load necessary modules
const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");

module.exports = {
  // Create one user
  registerOne: async (req, res) => {
    try {
      const user = new User({
        username: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const result = await user.save();
      console.log(result);

      return res.status(201).send({
        success: true,
        message:
          "Newuser was successfully registered. In few seconds, You will be redirected to log in",
      });
      //.json({ message: "New user has been registered succesfully" });
    } catch (error) {
      return error;
    }
  },
};
