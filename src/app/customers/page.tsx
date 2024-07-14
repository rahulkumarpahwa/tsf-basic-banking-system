"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("/api/getcustomers");
      console.log(response.data);
      setCustomers(response.data.customers);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#3c7091]">
      <div>{customers.length === 0 && <div>No Data Available</div>}</div>
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
          {customers.length != 0 &&
            customers.map((customer: any, index: number) => (
              <tr key={customer._id}>
                <th scope="row">{index + 1}</th>
                <td>{customer.username}</td>
                <td>{customer.email}</td>

                <td>{customer.currentBalance}</td>
                <td>22</td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={3}>
              Net Current Balance (₹)
            </th>
            <td>{totalBalance}</td>
          </tr>
          <tr>
            <th scope="row" colSpan={3}>
              Total Customers
            </th>
            <td>{customers.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Customers;
