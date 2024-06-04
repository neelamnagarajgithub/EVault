"use client";
import { toggleTypeOfView } from "@/app/_store/slice";
import { Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { VscChromeClose } from "react-icons/vsc";
import axios from "axios";
import { useDispatch } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
// import { create as IPFSHTTPClient } from "ipfs-http-client";

// const projectId = process.env.NEXT_PUBLIC_IPFS_ID
// const projectSecret = process.env.NEXT_PUBLIC_IPFS_KEY
// const auth = 'Basic ' + Buffer.from(projectId + ":" + projectSecret).toString('base64')

// console.log(projectId);
// const client = IPFSHTTPClient({
//    host:'ipfs.infura.io',
//   port:5001,
//   protocol: 'https',
//   headers: {
//     Authorization: auth
//   }
// });

export default function UploadForm() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const Handler = {
    file,
    setFile,
    fileUrl,
    setFileUrl,
    uploaded,
    setUploaded,
  };

  const [ipfsAddress, setIpfsAddress] = useState("");
  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploadLoading(true);
    const fileData = new FormData();
    fileData.append("file", file);
    const responseData = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: fileData,
      headers: {
        pinata_api_key: "",
        pinata_secret_api_key:
          "",
        "Content-Type": "multipart/form-data",
      },
    });
    const fileURL =
      "https://ipfs.io/ipfs/" +
      responseData.data.IpfsHash;
    console.log(fileURL);
    setUploadLoading(false);
    setUploaded(true);
    Handler.setUploaded(true);
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
              setFile(e.target.files[0]);
            }
          }}
        />

        {uploadLoading == true ? (
          <Button>
            <TailSpin color="#fff" height={20} />
          </Button>
        ) : uploaded == false ? (
          <Button
            type="submit"
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
          >
            Upload Files to IPFS
          </Button>
        ) : (
          <button style={{ cursor: "no-drop" }}>
            Files uploaded Successfully. IPFS Address: {ipfsAddress}
          </button>
        )}
      </form>
    </div>
  );
}
