import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x4c9B6c64664314D18C2cD05bF3FE31534c705C99";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {
  const saveContract = m.contract("SaveERC20", [tokenAddress]);

  return { saveContract };
});

export default SaveERC20Module;
