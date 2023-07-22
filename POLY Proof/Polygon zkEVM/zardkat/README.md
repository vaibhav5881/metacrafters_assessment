## zkSNARK Circuit Implementation Project 

## Introduction
In this project, we have designed a zero-knowledge Succinct Non-Interactive Argument of Knowledge (zkSNARK) circuit using the circom programming language. The circuit implements a logical gate to verify that two input signals, A and B, when multiplied together, yield a 0 output. The main objective is to prove that the prover knows the correct inputs A=0 and B=1 that satisfy the condition.

## Project Structure
The project consists of the following components:

-- circuit.circom: This file contains the implementation of the zkSNARK circuit using the circom programming language. The circuit is designed to check whether the output q is the multiplication of inputs a and b.

-- main component: The main component of the circuit is Multiplier2(), which incorporates the custom logic using AND, NOT, and OR gates. It defines the input signals a and b, intermediate signals x and y, and the final output signal q.

-- AND(), OR(), and NOT() templates: These templates define the logic for basic logic gates that are used within the Multiplier2() component.

## Circuit Logic
-- The circuit follows the logical flow to check whether A multiplied by B results in 0:
-- The andGate component is used to calculate the bitwise AND of input signals a and b, and the result is stored in signal x.
-- The notGate component takes input signal b and computes its bitwise negation, which is then stored in signal y.
-- The orGate component takes signals x and y as inputs and performs a bitwise OR operation to obtain the final output signal q.
-- The output q should be 1 (true) if A multiplied by B is equal to 0, and 0 (false) otherwise.


## Conclusion
This project demonstrates the implementation of a zkSNARK circuit that verifies the correctness of inputs using logical gates in the circom programming language. By successfully completing the requirements and verifying the proof on-chain, it showcases the ability to achieve zero-knowledge proofs for specific computations without revealing the inputs, thereby enhancing privacy and security in decentralized systems.

## Authors

- Vaibhav Kumar Chaurasiya

Contributors names and contact info:

- @vaibhav5881 (https://github.com/vaibhav5881)