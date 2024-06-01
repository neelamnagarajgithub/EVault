import Image from "next/image";
import backgroundImage from "@/public/image.png";

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
        <h1 className=" text-white">hello world</h1>
      </div>
    </section>
  );
}
