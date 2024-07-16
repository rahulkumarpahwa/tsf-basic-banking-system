"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import useGetTransactions from "@/utils/useGetTransactions";

const Transaction = () => {
  const transactions = useGetTransactions();
  let totalTransfer = 0;

  if (transactions.length != 0) {
    transactions.forEach((transaction: any) => {
      totalTransfer += transaction.transferAmount;
    });
  }

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#3c7091]">
      <table>
        <caption>All Transactions</caption>
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Transfer Amount (₹)</th>
            <th scope="col">Send Money</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: any, index: number) => (
            <tr key={transaction._id}>
              <th scope="row">{index + 1}</th>
              <td>{transaction.sender}</td>
              <td>{transaction.receiver}</td>

              <td className="text-center">
                {formatter.format(transaction.transferAmount)}
              </td>
              <td>
                {" "}
                <Link
                  href={`/send/${transaction.sender}`}
                  className="inline-flex items-center px-4 py-2 bg-[#2d9be0] hover:bg-[#0e5d8f] text-white text-sm font-medium rounded-md"
                >
                  Send Again
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={3}>
              Net Transfer
            </th>
            <td className="text-center">
              ₹
              {totalTransfer
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" colSpan={3}>
              Total No. of Transactions
            </th>
            <td className="text-center">{transactions.length}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Transaction;
