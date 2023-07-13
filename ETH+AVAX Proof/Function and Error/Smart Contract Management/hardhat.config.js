require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    local: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["0xe2067adbb53465659d42860620ada707aebcc2541b2584214e5f88af603195b3"],
    },
  },
  solidity: "0.8.18",
};
