// Functions for registering a new user and for authorized login
// Load necessary modules
"use strict";
const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const { JWT, OAuth2Client } = require("google-auth-library");

const { CLIENT_ID } = require("../config/index.js");

const client = new OAuth2Client(CLIENT_ID);

module.exports = {
  // Create one user
  registerOne: async (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const result = await user.save();
      return res.status(201).send({
        success: true,
        message: "User successfully registered. Redirection in 5 seconds....",
      });
    } catch (error) {
      return error;
    }
  },

  // User log in
  logIn: async (req, res) => {
    try {
      User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (!user) {
          return res.status(404).send({ message: "user Not found." });
        }

        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }

        function getAccessToken() {
          return new Promise(function (resolve, reject) {
            var keys = require("./jwt.keys.json");
            const jwtClient = new JWT({
              email: keys.client_email,
              key: keys.private_key,
              scopes: ["https://www.googleapis.com/auth/cloud-platform"],
            });
            jwtClient.authorize(function (err, tokens) {
              if (err) {
                reject(err);
                return;
              }
              resolve(tokens.access_token);
            });
          });
        }
        getAccessToken()
          .then((access_token) => {
            res.status(200).send({
              id: user._id,
              username: user.username,
              email: user.email,
              token: access_token,
            });
          })
          .catch((e) => console.log(e));
      });
    } catch (error) {
      return error;
    }
  },

  // User Log in with Google
  googleLogIn: async (req, res) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: CLIENT_ID,
      });
      //console.log("HASTA AQUI", ticket);
      const payload = ticket.getPayload();
      const userid = payload["sub"];
      //const { name, email } = ticket.getPayload();
      /* const user = await db.user.upsert({
        where: { email: email },
        update: { name, picture },
        create: { name, email, picture },
        
      }); */
      res.status(201).json(userid);
      //console.log("USErID", JSON.stringify(userid));
    } catch (error) {
      return error;
    }
  },
};
