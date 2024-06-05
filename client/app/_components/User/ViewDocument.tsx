
"use client";
import { ethers } from "ethers";
import {providers} from "ethers";
import { abi } from "./key";


export default function ViewDocument() {
 
  const NFTView = async (e) => {
    e.preventDefault();
    await window.ethereum.request({ method: 'eth_requestAccounts' });
       let provider = new providers.Web3Provider(window.ethereum);
       let signer = provider.getSigner();
       const contractABI = abi;
       const contractAddress =
         "0x5c336690Bf2D4a1041A344C316820AE0BBA95CE1";
       let contract = new ethers.Contract(contractAddress, contractABI, signer);
       const tx = await contract.viewDoc(1);
       console.log(tx);
       window.open(tx, '_blank');
     };

     

  return (
    <form>
      <button className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
           onClick={NFTView}>View Document</button>
    </form>
  );
}
