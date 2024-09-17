import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x6c5889875bFfa537F8c9bFD6e38161dc33AdD63f";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {
  const save = m.contract("SaveERC20", [tokenAddress]);

  return { save };
});

export default SaveERC20Module;

// Deployed Addresses

// Web3CXIModule#Web3CXI - 0x6c5889875bFfa537F8c9bFD6e38161dc33AdD63f
// SaveERC20Module#SaveERC20 - 0x5E539d20AE218aAdEa7E0A7C54d28b59D60c5D5f
