"use client";
import { toggleTypeOfView } from "@/app/_store/slice";
import { RootState } from "@/app/_store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadForm from "./UploadForm";
import ViewDocument from "./ViewDocument";
import ShareDocument from "./ShareDocument";

export default function DocumentsSection() {
  const [typeofView, setTypeOfView] = useState("");

  const isopen = useSelector((state: RootState) => state.user.showTypeOFView);

  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-[90vh] bg-neutral-950 w-full gap-8">
      {!isopen && (
        <div className="flex justify-center items-center gap-8">
          <button
            className="bg-neutral-100 text-2xl px-10 py-5 rounded-lg font-bold font-mono hover:bg-neutral-900 hover:text-neutral-100 transition-colors duration-300 ease-in-out border hover:border-neutral-100"
            onClick={() => {
              dispatch(toggleTypeOfView());
              setTypeOfView("upload");
            }}
          >
            Upload Document
          </button>
          <button
            className="bg-neutral-100 text-2xl px-10 py-5 rounded-lg font-bold font-mono hover:bg-neutral-900 hover:text-neutral-100 transition-colors duration-300 ease-in-out border hover:border-neutral-100"
            onClick={() => {
              dispatch(toggleTypeOfView());
              setTypeOfView("view");
            }}
          >
            View Document
          </button>
          <button
            className="bg-neutral-100 text-2xl px-10 py-5 rounded-lg font-bold font-mono hover:bg-neutral-900 hover:text-neutral-100 transition-colors duration-300 ease-in-out border hover:border-neutral-100"
            onClick={() => {
              dispatch(toggleTypeOfView());
              setTypeOfView("share");
            }}
          >
            Share Document
          </button>
        </div>
      )}
      {isopen && typeofView === "upload" && <UploadForm />}
      {isopen && typeofView === "view" && <ViewDocument />}
      {isopen && typeofView === "share" && <ShareDocument />}
    </div>
  );
}
