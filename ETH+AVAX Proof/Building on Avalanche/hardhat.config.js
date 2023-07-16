require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    avalanche: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: ["d2571a64077f11d739fd56febb46f0682a9f3845c6b8e99fc98215d31bcd89eb"],
    },
  },
  solidity: "0.8.18",
};
