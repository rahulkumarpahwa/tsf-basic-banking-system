"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 pt-4 pb-2 shadow shadow-white bg-gradient-to-r from-cyan-400 to-blue-400">
      <Link href={"/"}>
        {" "}
        <div className="flex gap-3 items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={60} height={48} priority />

          <span className="font-semibold text-xl font-mono">
            Simple Bank App
          </span>
        </div>{" "}
      </Link>
      <ul className="flex justify-center items-center gap-10">
        <li className="hover:text-black hover:bg-white font-semibold rounded-lg p-1">
          <Link href={"/customers"}>View Customers</Link>
        </li>
        <li className="hover:text-black hover:bg-white font-semibold rounded-lg p-1">
          <Link href={"/transactions"}>Transactions</Link>
        </li>
        <li className="hover:text-black hover:bg-white font-semibold rounded-lg p-1">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;