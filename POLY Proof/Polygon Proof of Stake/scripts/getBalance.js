const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/KnightsNFT.sol/KnightsNFT.json");

const tokenAddress = "0x3DB3B820C4ce0c3722a0390a33718C9a19148308"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x88075CC0058De0327ACA183530156eb8Da250Ef1"; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });