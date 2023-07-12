# Error Handling Contract

This repository contains the code for the Error Handling contract, written in Solidity. The contract allows for the manipulation of a single unsigned integer variable "x", with error handling mechanisms in place.

## Description

The Error Handling contract demonstrates the usage of error handling techniques in Solidity. It includes two functions: "setX" and "setXWithRevert", both of which enforce certain conditions on the input value before updating the variable "x".

The "setX" function validates that the input value is smaller than one thousand (1000) and asserts that it is not equal to 11. If either of these conditions is violated, the function throws an assertion error, reverting the transaction and discarding any changes made.

The "setXWithRevert" function performs similar validations, but instead of using an assertion, it utilizes the "revert" keyword to revert the transaction with a custom error message if the input value is 200. This function allows for a more controlled way of handling errors and providing informative error messages.

## Getting Started

To get started with the Error Handling contract, follow the instructions below.

### Usage

1. Deploy the "ErrorHandling" contract on the Ethereum blockchain.
2. Call the "setX" function to set the value of "x".
   - The input must be smaller than one thousand (1000).
   - The value 11 is not allowed and will trigger an assertion error.
3. Call the "setXWithRevert" function to set the value of "x" with revert functionality.
   - The input must be smaller than one thousand (1000).
   - The value 200 is not allowed and will trigger a revert with a custom error message.

## Authors

- Vaibhav Kumar Chaurasiya

Contributors names and contact info:

- @vaibhav5881 (https://github.com/vaibhav5881)