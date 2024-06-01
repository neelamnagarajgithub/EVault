import Image from "next/image";
import Navbar from "./_components/_Navigation/Navbar";
import HeroSection from "./_components/_Pages/HeroSection";
import ServicesWeOfferSection from "./_components/_Pages/ServicesWeOfferSection";
import backgroundImage from "@/public/image.png";

export default function Page() {
  return (
    <main className=" flex flex-col relative">
      <Navbar />
      <div className="absolute top-0 left-0 z-[-10] w-full h-screen">
        <Image
          src={backgroundImage}
          alt="bg-image"
          className="h-full w-full object-center object-cover"
        />
      </div>
      <HeroSection />
      <ServicesWeOfferSection />
    </main>
  );
}
