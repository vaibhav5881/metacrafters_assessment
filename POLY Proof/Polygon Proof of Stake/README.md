## NFT Project with Polygon Bridge 
This project involves deploying an NFT collection on the Ethereum blockchain and then transferring the assets over to the Polygon network using the Polygon Bridge. Additionally, the NFT images are generated using an image generation tool like DALLE 2 or Midjourney.

## Smart Contract - KnightsNFT.sol
The KnightsNFT smart contract is an ERC721 contract with URI storage and is owned by the deployer.
The contract includes a promptDescription() function to provide the prompt used for generating the NFT images.

## Hardhat Scripts
-- batchMint.js: This script is responsible for batch minting all 5 NFTs to a specified address on the Goerli Testnet. It uses the mint() function from the KnightsNFT contract.

-- approveDeposit.js: This script approves and transfers the NFTs from the Ethereum network to the Polygon Mumbai network using the FxPortal Bridge. It also uses the setApprovalForAll() function from the KnightsNFT contract.

-- getBalance.js: This script checks the balance of NFTs on the Polygon Mumbai network. It uses the balanceOf() function from the KnightsNFT contract.

## Instructions
-- Clone the repository and set up the required development environment.

-- Use an image generation tool (DALLE 2 or Midjourney) to generate 5 unique NFT images.

-- Upload the NFT images to IPFS using pinata.cloud and obtain the corresponding image URLs.

-- Deploy the KnightsNFT smart contract to the Goerli Ethereum Testnet.

-- Optionally, map the NFT collection to the Polygon network using the Polygon Network Token Mapper.

-- Run the batchMint.js script to mint all 5 NFTs to a specified address on the Goerli Testnet.

-- Execute the approveDeposit.js script to approve and transfer the NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

Finally, use the getBalance.js script to check the balance of NFTs on the Polygon Mumbai network.

## Authors

- Vaibhav Kumar Chaurasiya

Contributors names and contact info:

- @vaibhav5881 (https://github.com/vaibhav5881)


