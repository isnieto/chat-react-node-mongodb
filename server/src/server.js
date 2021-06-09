const express = require('express');
const path = require('path');
const cors = require('cors');
const { PORT } = require('./config/index.js');
// Confirm connection
const conn = require("./config/db.connection");


const app = express();
// CORS indicates any other origins (domain, scheme, or port) than its own to permit loading of resources. 
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, '../public')));
// Load routes
require('./routes/auth.routes.js')(app);
require('./routes/chat.routes.js')(app);

// Start server
const server = app.listen(PORT, ()=>{
    console.log('Server running on port', PORT);
    if (conn) {
        console.log(
          "MongoDB database connection established succesfully"
        );
        console.log('Press Ctrl+C to quit.');
      }
})

module.exports = server;