
"use client";
import { ethers } from "ethers";
import {providers} from "ethers";
import { abi } from "./key";




export default function VerifyDoc() {



    const NFTViewOwner = async (e) => {
      try{
        e.preventDefault();
        await window.ethereum.request({ method: 'eth_requestAccounts' });
           let provider = new providers.Web3Provider(window.ethereum);
           let signer = provider.getSigner();
           const contractABI = abi;
           const contractAddress =
             "0x69A9C4d84E14762DE925d3502aAC02Cf3a76230D";
           let contract = new ethers.Contract(contractAddress, contractABI, signer);
           const tx = await contract.viewOwner(2);
           console.log(tx);
      }catch(e){
        console.log("This is Not Belongs to you");
         };

    return (
        <form>
        <button className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
             onClick={NFTViewOwner}>Verify Document</button>
      </form>
    );
  }


  