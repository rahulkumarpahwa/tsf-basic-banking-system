"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  let totalBalance = 0;

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("/api/getcustomers");
      console.log(response.data);
      setCustomers(response.data.customers);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (customers.length != 0) {
    customers.forEach((customer: any) => {
      totalBalance += customer.currentBalance;
    });
  }

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#3c7091]">
      <div>{customers.length === 0 && <div>No Data Available</div>}</div>
      {customers.length != 0 && (
        <table>
          <caption>All Customers</caption>
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Current Balance (₹)</th>
              <th scope="col">Send Money</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer: any, index: number) => (
              <tr key={customer._id}>
                <th scope="row">{index + 1}</th>
                <td>{customer.username}</td>
                <td>{customer.email}</td>

                <td className="text-center">
                  {formatter.format(customer.currentBalance)}
                </td>
                <td>
                  {" "}
                  <Link href={`/send/${customer.username}`} className="inline-flex items-center px-4 py-2 bg-[#2d9be0] hover:bg-[#0e5d8f] text-white text-sm font-medium rounded-md">
                    Send
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={3}>
                Net Current Balance
              </th>
              <td className="text-center">
                ₹
                {totalBalance
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" colSpan={3}>
                Total Customers
              </th>
              <td className="text-center">{customers.length}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Customers;
