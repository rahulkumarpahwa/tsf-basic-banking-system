import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an username"],
    unique: [true, "Please provide an unique username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Please provide an unique email"],
  },
  currentBalance: {
    type: Number,
    min: 0,
    default: 0,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
