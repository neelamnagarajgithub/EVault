"use client";
import {
  setFile,
  setUploadLoading,
  setUploaded,
  toggleTypeOfView,
} from "@/app/_store/slice";
import { RootState } from "@/app/_store/store";
import axios from "axios";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function UploadForm() {
  const dispatch = useDispatch();

  const file = useSelector((state: RootState) => state.user.file);
  const fileUrl = useSelector((state: RootState) => state.user.fileUrl);
  const uploaded = useSelector((state: RootState) => state.user.uploaded);
  const uploadLoading = useSelector(
    (state: RootState) => state.user.uploadLoading
  );

  const uploadFiles = async (e) => {
    e.preventDefault();
    dispatch(setUploadLoading());

    const fileData = new FormData();
    fileData.append("file", file);

    const responseData = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: fileData,
      headers: {
        pinata_api_key: "",
        pinata_secret_api_key: "",
        "Content-Type": "multipart/form-data",
      },
    });
    const fileURL = "https://ipfs.io/ipfs/" + responseData.data.IpfsHash;
    console.log(fileURL);
    dispatch(setUploadLoading());
    // setUploaded(true);
    dispatch(setUploaded());
    toast.success("Files Uploaded Sucessfully");
  };

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
        onSubmit={uploadFiles}
      >
        <input
          type="file"
          name="file"
          id="file"
          className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              dispatch(setFile(e.target.files[0]));
            }
          }}
        />

        {uploadLoading == true ? (
          <button
            disabled
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
          >
            Uploading Files... Please Wait
          </button>
        ) : uploaded == false ? (
          <button
            type="submit"
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
          >
            Upload Files to IPFS
          </button>
        ) : (
          <button className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out">
            Files uploaded Successfully. {fileUrl}
          </button>
        )}
      </form>
    </div>
  );
}
