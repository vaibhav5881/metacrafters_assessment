# Smart Contract Management
This README provides an overview of the project and explains how to set it up and use it. The project consists of a smart contract written in Solidity and a front-end application built with React.js. The project allows users to interact with the smart contract to set and retrieve a value.

# Prerequisites
To run this DApp, make sure you have the following prerequisites installed:

Node.js (version 14 or later)
MetaMask browser extension

# Installation
Follow these steps to install and configure the DApp:

Clone the repository to your local machine.
Navigate to the project directory.
Install the dependencies .

# Usage
To use the DApp, follow these steps:

Start the development server.
Open your web browser and ensure that MetaMask is enabled.

MetaMask should be connected to a supported Ethereum network (e.g., the Rinkeby test network).

If MetaMask is not connected, click on the MetaMask extension icon and follow the prompts to set it up.

Once connected, you will see your Ethereum account address displayed on the DApp.

To set a new value in the smart contract, enter a numeric value in the "Set Value" input field and click the "Set Value" button.

To retrieve the current value stored in the smart contract, click the "Get Value" button. The current value will be displayed below.

You can interact with the DApp as many times as you like, setting new values and retrieving the current value.

# Contract
The smart contract code is written in Solidity and defines a contract called SCM. It includes two functions:

setValue(uint _newValue): Allows the user to set a new value in the contract.
getValue() returns (uint): Retrieves the current value stored in the contract.
The smart contract is deployed at the following address:

Contract Address: 0x0081B69FCb864bD49BdCc5493C0428B258573385

# Front-End
The front-end application is built with React.js and consists of a single component App.js. It utilizes the ethers.js library to interact with the smart contract.

The front-end code handles the following tasks:

Connects to MetaMask and retrieves the user's Ethereum account address.
Retrieves the current value from the smart contract and displays it.
Allows the user to set a new value in the smart contract.

## Authors

- Vaibhav Kumar Chaurasiya

Contributors names and contact info:

- @vaibhav5881 (https://github.com/vaibhav5881)
