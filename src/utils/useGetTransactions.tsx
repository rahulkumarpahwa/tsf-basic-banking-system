"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const fetchTransactions = async () => {
    try {
      const response = await axios.get("/api/gettransactions");
      console.log(response.data);
      setTransactions(response.data.transactions);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  return transactions;
};

export default useGetTransactions;
