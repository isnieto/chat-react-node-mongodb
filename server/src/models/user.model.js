//Create the collection Schema for mongo
const mongoose = require("mongoose");

// Create model and exports it

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  registeredAt: { type: Date, default: Date.now },
});
const ChatUser = mongoose.model("chatUser", userSchema);
// Create model and exports it
module.exports = ChatUser;
