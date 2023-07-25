require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: "https://goerli.blockpi.network/v1/rpc/public",
      accounts: ["a2c908e4b99360654cff593d67156fdf9eb5982ab6cd2e12f27a25a63056cacf"],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["a2c908e4b99360654cff593d67156fdf9eb5982ab6cd2e12f27a25a63056cacf"],
    },
  },
  solidity: "0.8.18",
};
