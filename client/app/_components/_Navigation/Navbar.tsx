"use client";
import NavElements from "./NavElements";
import { useSelector } from "react-redux";
import NavMobileElements from "./NavMobileElements";
import { RootState } from "@/app/_store/store";

export default function Navbar() {
  const isopen = useSelector((state: RootState) => state.user.showMenu);
  return (
    <div className="flex fixed w-full h-[10vh] backdrop-blur md:justify-between justify-center items-center text-center z-[100] left-0 top-0 flex-wrap px-40">
      <h1 className=" text-3xl text-white ml-2 font-mono font-semibold">
        EVault
      </h1>
      <NavElements />
      <NavMobileElements />
    </div>
  );
}
