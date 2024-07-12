import mongoose from "mongoose";
import User from "./userModel";

const transactionSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  transferAmount: {
    type: Number,
    min: 0,
  },
});

const Transaction =
  mongoose.models["Transaction"] || mongoose.model("transactions", transactionSchema);

export default Transaction;
