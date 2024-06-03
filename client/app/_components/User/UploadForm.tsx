"use client";
import { toggleTypeOfView } from "@/app/_store/slice";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";

export default function UploadForm() {
  const dispatch = useDispatch();
  return (
    <div className=" bg-neutral-900 px-10 py-5 rounded-lg flex flex-col justify-center items-start gap-8">
      <button
        onClick={() => {
          dispatch(toggleTypeOfView());
        }}
      >
        <VscChromeClose className=" text-white text-3xl" />
      </button>
      <form
        action=""
        className="flex flex-col gap-8 justify-center items-center"
      >
        <input
          type="file"
          name="file"
          id="file"
          className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
        />
        <button
          type="submit"
          className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
