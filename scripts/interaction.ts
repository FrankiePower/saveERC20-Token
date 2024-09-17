import { ethers } from "hardhat";

async function main() {
  const web3CXITokenAddress = "0x6c5889875bFfa537F8c9bFD6e38161dc33AdD63f";
  const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

  const saveERC20ContractAddress = "0x5E539d20AE218aAdEa7E0A7C54d28b59D60c5D5f";
  const saveERC20 = await ethers.getContractAt(
    "ISaveERC20",
    saveERC20ContractAddress
  );

  // Approve savings contract to spend token
  const approvalAmount = ethers.parseUnits("1000", 18);

  const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
  approveTx.wait();

  const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
  console.log("Contract balance before :::", contractBalanceBeforeDeposit);

  const depositAmount = ethers.parseUnits("150", 18);
  const depositTx = await saveERC20.deposit(depositAmount);

  console.log(depositTx);

  depositTx.wait();

  const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

  console.log("Contract balance after :::", contractBalanceAfterDeposit);

  // Withdrawal Interaction
  const withdrawAmount = ethers.parseUnits("50", 18);
  const withdrawTx = await saveERC20.withdraw(withdrawAmount);

  console.log(withdrawTx);

  withdrawTx.wait();

  const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();

  console.log(
    "Contract balance after withdrawal",
    contractBalanceAfterWithdrawal
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
