"use client";
import NavElements from "./NavElements";
import { useSelector } from "react-redux";
import NavMobileElements from "./NavMobileElements";
import { RootState } from "@/app/_store/store";

export default function Navbar() {
  const isopen = useSelector((state: RootState) => state.user.showMenu);
  return (
    <div className="flex fixed w-screen h-[10vh] backdrop-blur justify-center items-center text-center  z-[100] left-0 top-0 flex-wrap bg-black">
      <NavElements />
      <NavMobileElements />
    </div>
  );
}
