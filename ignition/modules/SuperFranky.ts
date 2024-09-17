import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SuperFrankyModule = buildModule("SuperFrankyModule", (m) => {
  const erc20 = m.contract("SuperFranky");

  return { erc20 };
});

export default SuperFrankyModule;
