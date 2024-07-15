import mongoose from "mongoose";
import User from "./userModel";

const transactionSchema = new mongoose.Schema({
  sender: {
    type: String,
  },
  receiver: {
    type: String,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  transferAmount: {
    type: Number,
    min: 0,
  },
});

const Transaction =
  mongoose.models.transactions ||
  mongoose.model("transactions", transactionSchema);

export default Transaction;
