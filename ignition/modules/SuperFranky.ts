import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SuperFrankyModule = buildModule("SuperFrankyModule", (m) => {
  const erc20 = m.contract("Web3CXI");

  return { erc20 };
});

export default SuperFrankyModule;
