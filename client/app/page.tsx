import Navbar from "./_components/_Navigation/Navbar";
import HeroSection from "./_components/_Pages/HeroSection";

export default function Page() {
  return (
    <main className=" flex flex-col">
      <Navbar />
      <HeroSection />
      <section className="">
        <div className="h-screen w-full">hello</div>
      </section>
    </main>
  );
}
