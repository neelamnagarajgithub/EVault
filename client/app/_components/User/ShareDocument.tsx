
"use client";
import { ethers } from "ethers";
import {providers} from "ethers";
import { abi } from "./key";




export default function ShareDocument() {

    const NFTViewOwner = async (e) => {
        e.preventDefault();
        await window.ethereum.request({ method: 'eth_requestAccounts' });
           let provider = new providers.Web3Provider(window.ethereum);
           let signer = provider.getSigner();
           const contractABI = abi;
           const contractAddress =
             "0x5c336690Bf2D4a1041A344C316820AE0BBA95CE1";
           let contract = new ethers.Contract(contractAddress, contractABI, signer);
           const tx = await contract.viewOwner(1);
           console.log(tx);
         };

         const NFT_Transfer = async (e) => {
          e.preventDefault();
        await window.ethereum.request({ method: 'eth_requestAccounts' });
           let provider = new providers.Web3Provider(window.ethereum);
           let signer = provider.getSigner();
           const contractABI = abi;
           const contractAddress =
             "0x5c336690Bf2D4a1041A344C316820AE0BBA95CE1";
           let contract = new ethers.Contract(contractAddress, contractABI, signer);
           const tx = await contract.transferDoc('0x9a2F077ce1A17D24129D0d71277d1e432F05CdEA',1);
           console.log(tx);
         };
    return (
        <form>
        <button className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
             onClick={NFTViewOwner}>Verify Document</button>
        <button className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
             onClick={NFT_Transfer}>Transfer Rights</button>
      </form>
    );
  }
