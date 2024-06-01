import Image from "next/image";
import backgroundImage from "@/public/image.png";
import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-full">
      <div className="absolute top-0 left-0 z-[-10] h-screen w-full">
        <Image
          src={backgroundImage}
          alt="bg-image"
          className=" h-full w-full object-cover object-center"
        />
      </div>
      <div className=" h-screen w-full flex justify-center items-center px-40">
        <div className="flex gap-2 flex-col">
          <h1 className=" text-white text-5xl font-mono font-bold">
            Revolutionizing Legal Record Management with Blockchain Technology
          </h1>
          <p className=" text-white">
            Join us in creating a secure, transparent, and efficient eVault
            system for legal records.
          </p>
          <Link
            href="/account"
            className=" bg-blue-800 font-semibold font-mono text-2xl w-max px-4 py-2 rounded-lg text-white hover:bg-blue-900 transition-all duration-300 ease-in-out mt-4 flex justify-center items-center gap-1 hover:gap-2"
          >
            Get started
            <span>
              <BiArrowFromLeft />
            </span>
          </Link>
        </div>
        {/* <Scene /> */}
      </div>
    </section>
  );
}
