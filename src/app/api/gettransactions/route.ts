import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Transaction from "@/models/transactionModel";
connect();

export const GET = async (request: NextRequest) => {
  try {
    const transactions = await Transaction.find({});

    return NextResponse.json(
      { message: "All Transactions", transactions, success: true },
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
