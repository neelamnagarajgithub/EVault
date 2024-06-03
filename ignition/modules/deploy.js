const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StoreModule", (m) => {

  const storeipfs = m.contract("Store", []);
  console.log(storeipfs.address);
  return { storeipfs };
});