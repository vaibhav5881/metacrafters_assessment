const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/KnightsNFT.sol/KnightsNFT.json");

const tokenAddress = "0x6A26D267d3340E481AAA6503ccCE05E0987bb55b"; 
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x88075CC0058De0327ACA183530156eb8Da250Ef1"; 

async function main() {

  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
  const [signer] = await ethers.getSigners();

  const approveTx = await tokenContract.connect(signer).setApprovalForAll(fxERC721RootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  for(let i = 1 ; i <= 5; i++)
  {
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
  }
  
  console.log("Approved and deposited");
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});