import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Transaction from "@/models/transactionModel";
connect();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { sender, receiver, transferAmount } = reqBody;
    const sendUser = await User.findOne({ username: sender });
    const receiveUser = await User.findOne({ username: receiver });

    sendUser.currentBalance = sendUser.currentBalance - Number(transferAmount);
    receiveUser.currentBalance =
      receiveUser.currentBalance + Number(transferAmount);

    const newTransaction = new Transaction({
      sender: sender,
      receiver: receiver,
      senderId: sendUser._id,
      receiverId: receiveUser._id,
      transferAmount: Number(transferAmount),
    });

    await sendUser.save();
    await receiveUser.save();
    await newTransaction.save();

    return NextResponse.json(
      {
        sendUser,
        receiveUser,
        newTransaction,
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
};
