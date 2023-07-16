## DegenToken Contract
This is a Solidity contract for a custom ERC20 token called "Degen" with the symbol "DGN". The contract extends the ERC20 and Ownable contracts from the OpenZeppelin library.

## Features
The DegenToken contract provides the following features:

Minting: The owner of the contract can mint new tokens and assign them to a specific address.
Transfer: Token holders can transfer tokens to other addresses.
Redemption: Token holders can redeem specific items by burning the required token amount.
Item Prices: The contract stores the prices of different items in a mapping.

## Item Redemption
The DegenToken contract allows token holders to redeem specific items using the redeem function. The function requires the caller to provide a valid item ID and have a sufficient balance of tokens to complete the redemption. The mapping itemPrices stores the prices of different items, and the corresponding amount is burned from the caller's balance upon successful redemption.

## Usage
To use this contract, you can follow these steps:

Deploy the contract on a compatible Ethereum network (e.g., Rinkeby, Ropsten, or a local development network).
After deployment, the contract owner can call the mint function to create and assign tokens to specific addresses.
Token holders can transfer their tokens to other addresses using the transfer function.
Token holders can redeem specific items using the redeem function by providing a valid item ID and having a sufficient token balance.

## Authors

- Vaibhav Kumar Chaurasiya

Contributors names and contact info:

- @vaibhav5881 (https://github.com/vaibhav5881)


