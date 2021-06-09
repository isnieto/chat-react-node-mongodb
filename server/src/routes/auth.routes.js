// Load middleware module to check if player name and email already exists
// otherwise go ahead
const checkDuplicates = require("../middleware/checkUser.js");
// Setting route controllers for all endpoint of th app
const authController = require("../app/auth.controller.js");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // Register new player
  app.post("/auth/signup", checkDuplicates, authController.registerOne);
  // Login for player
  app.post("/auth/login", authController.logIn);
};
