"use client";
import { toggleMenu } from "@/app/_store/slice";
import Link from "next/link";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_store/store";

export default function NavElements() {
  const isopen = useSelector((state: RootState) => state.user.showMenu);
  const dispatch = useDispatch();

  function handleMenu() {
    console.log(isopen);
    dispatch(toggleMenu());
  }
  return (
    <>
      <ul className="hidden text-black md:flex justify-between items-center text-center ">
        <w3m-button />
        <Link
          href="/auth/google"
          className=" bg-slate-600 text-white px-4 py-2 mx-2 rounded-lg"
        >
          Login
        </Link>
        <Link
          href="/auth/google"
          className=" bg-slate-600 text-white px-4 py-2 mx-2 rounded-lg"
        >
          Register
        </Link>
      </ul>
      <div className="md:hidden flex">
        <button
          className=" md:hidden justify-between items-center text-center text-2xl mr-4 text-black"
          onClick={handleMenu}
        >
          {isopen ? <VscChromeClose /> : <VscMenu />}
        </button>
      </div>
    </>
  );
}
