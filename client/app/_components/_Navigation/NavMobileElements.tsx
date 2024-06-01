import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_store/store";

export default function NavMobileElements() {
  const isopen = useSelector((state: RootState) => state.user.showMenu);
  return (
    <div
      className={`md:hidden absolute top-16 w-80 h-[700px] flex flex-col gap-20 ml-auto justify-center items-center transition-all duration-500 ease-in ${
        isopen ? "right-0 opacity-100" : "right-[-500px] opacity-0"
      } text-white p-4  z-[99] backdrop-blur-sm border-2 border-solid border-[rgba(255,255,255,0.84)]    rounded-xl bg-[rgba(5,5,5,0.41)]
  `}
    >
      <li className="text-yellow-300 no-underline font-semibold cursor-pointer list-none text-2xl z-10">
        Home
      </li>
      <li className="text-yellow-300 no-underline font-semibold cursor-pointer list-none text-2xl z-10">
        About us
      </li>
      <li className="text-yellow-300 no-underline font-semibold cursor-pointer list-none text-2xl z-10">
        Testimonials
      </li>
      <li className="text-yellow-300 no-underline font-semibold cursor-pointer list-none text-2xl z-10">
        Contact us
      </li>
      <Link
        href="/login"
        className="border-yellow-300 no-underline text-black font-semibold border cursor-pointer transition-all duration-[0.5s] px-[36px] py-[8px] h-aut0  rounded-[4px] border-solid bg-yellow-300 hover:text-yellow-300 hover:bg-black text-2xl hover:border-black"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="border-yellow-300 no-underline text-black font-semibold border cursor-pointer transition-all duration-[0.5s] px-[36px] py-[8px] h-aut0  rounded-[4px] border-solid bg-yellow-300 hover:text-yellow-300 hover:bg-black text-2xl hover:border-black"
      >
        Sign up
      </Link>
    </div>
  );
}
