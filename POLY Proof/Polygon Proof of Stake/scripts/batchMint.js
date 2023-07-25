const { ethers } = require("hardhat");

const NFT_CONTRACT_ADDRESS = "0x6A26D267d3340E481AAA6503ccCE05E0987bb55b"; 

const MINT_TO_ADDRESS = "0x88075CC0058De0327ACA183530156eb8Da250Ef1"; 


const imageUrls = ["ipfs://bafkreidtzpimdo6zcc24qi6wxhth2ilgbvothpi5rcge2kpw2hpa23vdbm",
  "ipfs://bafkreicplfwapszsbimuyt47s3gixkyirwvlimvzmqkgnzchoznltfbmlu",
  "ipfs://bafkreia4udz37u36gdpmc6hcpeh3o6e5sginhemwmyquqlc7pxbm65inba",
  "ipfs://bafkreiagzm5wz7b2aqhqmbxhtmlsmhpnnrwwohg5o75nt2tkxrbsy2j4xq",
  "ipfs://bafkreidqmzngvqfb2yh4zg6ze7r2noxfxv2vh47jcg4scrzezqckvv33ey"];

async function main() {
  const NFTContract = await ethers.getContractAt("KnightsNFT", NFT_CONTRACT_ADDRESS);

  const gasLimit = 300000; 

  for (let i = 0; i < 5; i++) {
    const tokenId = i + 1;
    const gasPrice = ethers.utils.parseUnits("250", "gwei");

    try {
      await NFTContract.mint(MINT_TO_ADDRESS, tokenId, imageUrls[i], {
        gasPrice: gasPrice,
        gasLimit: gasLimit,
      });
      console.log(`NFT ${tokenId} minted successfully.`);
    } catch (error) {
      console.error(`Error minting NFT ${tokenId}:`, error);
    }
  }

  console.log("Batch minting complete!");
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
