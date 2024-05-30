import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const {SEPOLIA_URL,SECRET_KEY}=process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
    networks: {
       sepolia: {
         url: SEPOLIA_URL,
         accounts: SECRET_KEY!==undefined?[SECRET_KEY]:[] ,
       },
    },
};

export default config;
