import { ethers } from "hardhat";

async function main() {
  const SuperFrankyTokenAddress = "0x4c9B6c64664314D18C2cD05bF3FE31534c705C99";
  const SuperFranky = await ethers.getContractAt(
    "IERC20",
    SuperFrankyTokenAddress
  );

  const saveERC20ContractAddress = "0xA05C36ba45751fd21F9eB70100fFFb8f70031506";
  const saveERC20 = await ethers.getContractAt(
    "ISaveERC20",
    saveERC20ContractAddress
  );

  // Approve savings contract to spend token
  const approvalAmount = ethers.parseUnits("1000", 18);

  const approveTx = await SuperFranky.approve(saveERC20, approvalAmount);
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
