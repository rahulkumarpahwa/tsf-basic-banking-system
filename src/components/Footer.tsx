"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-cyan-600 text-gray-400 py-12">
      <div
        className="max-w-6xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 
      text-center sm:text-left lg:text-left   "
      >
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 ">
            <span className="flex items-center gap-2 py-1">
              <Image
                src="/logo.png"
                alt="Logo"
                // className="dark:invert"
                width={30}
                height={24}
                priority
              />{" "}
              <span className="text-black"> Simple Bank App is</span>{" "}
            </span>
            <span className="text-black">
              bank app which is build for TSF WebApp Projects.
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-black"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-black"
              >
                View Customers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col text-black">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 ">Contact Us</h2>
          <div className="text-black">
            <p>New Delhi, India</p>
            <p>Delhi 10001</p>
            <p>Email: info@simplebank.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8 text-black">
        © 2024 Simple Bank App. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
