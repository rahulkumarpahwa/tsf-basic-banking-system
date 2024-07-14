"use client";
import { useState } from "react";

const Page = ({ params }: any) => {
  const [data, setData] = useState({
    sender: params.username,
    receiver: "",
    transferAmount: "",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#3c7091]">
      <div className="space-x-2">
        <label htmlFor="sender">Sender</label>
        <input
          className="focus:outline-none border border-gray-600 text-black rounded-md my-2 px-2 py-1"
          placeholder="Sender"
          id="sender"
          type="text"
          value={data.sender}
          onChange={(e) => setData({ ...data, sender: e.target.value })} //most important thing
        />
      </div>
      <div className="space-x-2">
        <label htmlFor="receiver">Receiver</label>
        <input
          className="focus:outline-none border border-gray-600 text-black rounded-md my-2 px-2 py-1"
          placeholder="Receiver"
          type="text"
          id="receiver"
          value={data.receiver}
          onChange={(e) => setData({ ...data, receiver: e.target.value })} //most important thing
        />
      </div>
      <div className="space-x-2">
        <label htmlFor="amount">Transfer Amount</label>
        <input
          className="focus:outline-none border border-gray-600 text-black rounded-md my-2 px-2 py-1"
          placeholder="Say ₹10,000.00"
          id="amount"
          type="number"
          value={data.transferAmount}
          onChange={(e) => setData({ ...data, transferAmount: e.target.value })} //most important thing
        />
      </div>
    </div>
  );
};

export default Page;
