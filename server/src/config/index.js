// Load enviroment variable
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  CLIENT_ID: process.env.CLIENT_ID

};

