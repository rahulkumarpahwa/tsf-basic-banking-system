import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import data from "@/utils/data.json";
connect();

export const POST = async (request: NextRequest) => {
  try {
    const deleteResponse = await User.deleteMany({});
    // console.log(data.data);
    const addResponse = await User.insertMany(data.data);

    return NextResponse.json(
      {
        message: "Data has been initialised",
        deleteResponse,
        addResponse,
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
