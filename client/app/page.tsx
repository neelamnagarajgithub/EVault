import backgroundImage from "@/public/imgage_2.jpg";
import Image from "next/image";
import Navbar from "./_components/_Navigation/Navbar";
import Footer from "./_components/_Pages/Footer";
import HeroSection from "./_components/_Pages/HeroSection";
import ServicesWeOfferSection from "./_components/_Pages/ServicesWeOfferSection";
import TestimonialsSection from "./_components/_Pages/TestimonialsSection";
import ContactUsButton from "./_components/contacusButton";

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
      <TestimonialsSection />
      <ContactUsButton />
      <Footer />
    </main>
  );
}
