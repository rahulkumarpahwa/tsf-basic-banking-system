import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[30rem] flex-col items-center justify-center gap-5  bg-[#3c7091] ">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg grayscale"
        src="/bank2.gif"
        alt="Logo"
        width={180}
        height={30}
        priority
      />
      <div>
        <h1 className="font-mono text-4xl">Welcome To Simple Bank App.</h1>
        <h2 className="flex gap-1 text-3xl my-4 items-center justify-center">
          To view All Customers{" "}
          <Link
            href={"/customers"}
            className="flex items-center justify-center gap-2 hover:translate-x-1.5 transition-transform motion-reduce:transform-none"
          >
            <FaArrowRight />{" "}
          </Link>
        </h2>
        <h2 className="flex gap-1 text-2xl my-1 items-center justify-center">
          To view All Transactions{" "}
          <Link
            href={"/transactions"}
            className="flex items-center justify-center gap-2 hover:translate-x-1.5 transition-transform motion-reduce:transform-none"
          >
            <FaArrowRight />{" "}
          </Link>
        </h2>
      </div>
    </main>
  );
}
