"use client";
import { useState } from "react";
import useGetCustomers from "@/utils/useGetCustomers";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = ({ params }: any) => {
  const router = useRouter();
  const customers = useGetCustomers();
  const [data, setData] = useState({
    sender: params.username,
    receiver: "",
    transferAmount: "",
  });

  const onSend = async () => {
    try {
      const response = await axios.post("/api/transaction", data);
      console.log(response.data);
      if (response.data.success) {
        router.push("/customers");
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="h-[30rem] bg-[#3c7091] flex items-center flex-col gap-5 justify-center">
      <h2 className="text-4xl">Transfer Money</h2>
      <div className="grid grid-cols-2 w-[30rem] bg-[#34a1e4] p-4 rounded-lg">
        <div className="flex flex-col">
          <label htmlFor="sender" className="my-2 px-2 py-1">
            Sender
          </label>
          <label htmlFor="receiver" className="my-2 px-2 py-1">
            Receiver
          </label>
          <label htmlFor="amount" className="my-2 px-2 py-1">
            Transfer Amount
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="focus:outline-none text-neutral-700 rounded-md my-2 px-2 py-1"
            placeholder="Sender"
            id="sender"
            type="text"
            value={data.sender}
            onChange={(e) => setData({ ...data, sender: e.target.value })} //most important thing
          />
          <select
            className="focus:outline-none border  text-black rounded-md my-2 px-2 py-1"
            id="receiver"
            value={data.receiver}
            onChange={(e) => setData({ ...data, receiver: e.target.value })} //most important thing
          >
            <option>Choose any Customer</option>
            {customers.length != 0 &&
              customers.map((customer) => (
                <option key={customer._id} value={customer.username}>
                  {customer.username} - {customer.email}{" "}
                </option>
              ))}
          </select>
          <input
            className="focus:outline-none text-black rounded-md my-2 px-2 py-1"
            placeholder="Say Send ₹10,000.00"
            id="amount"
            type="number"
            value={data.transferAmount}
            onChange={(e) =>
              setData({ ...data, transferAmount: e.target.value })
            } //most important thing
          />
        </div>
      </div>
      <button
        className="px-4 py-2 bg-[#2d9be0] hover:bg-[#0e5d8f] text-white text-xl font-medium rounded-md text-center w-[10rem]"
        onClick={() => {
          console.log(data);
          toast.success(`₹${data.transferAmount} Send to ${data.receiver}`);
          onSend();
        }}
      >
        Send
      </button>
      <Toaster />
    </div>
  );
};

export default Page;
