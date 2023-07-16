const { ethers } = require("hardhat")
 
async function main() {
  const Contract = await ethers.getContractFactory("Token");
  const contract = await Contract.deploy();
  console.log("Contract Address: ", contract.address)
}


main()
  .then(()=> process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });