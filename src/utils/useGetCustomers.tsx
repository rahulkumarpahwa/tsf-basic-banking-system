"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useGetCustomers = () => {
const [customers, setCustomers] = useState<any[]>([]);
const fetchCustomers = async () => {
  try {
    const response = await axios.get("/api/getcustomers");
    // console.log(response.data);
    setCustomers(response.data.customers);
  } catch (error: any) {
    console.log(error.message);
  }
};
useEffect(() => {
  fetchCustomers();
}, []);

return customers;

};

export default useGetCustomers;
