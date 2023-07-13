import './App.css';
import { useState, useEffect } from "react";
import { ethers } from "ethers";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xb621Bc35eE105AFdE17E00fce9a4949656b3A498";
      const contractABI = [
        {
          "inputs": [],
          "name": "getValue",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_newValue",
              "type": "uint256"
            }
          ],
          "name": "setValue",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "value",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];

      try {
        const { ethereum } = window;

        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setAccount(accounts[0]);
          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  const handleSetValue = async () => {
    try {
      if (state.contract && newValue !== "") {
        await state.contract.setValue(newValue);
        console.log("Value set successfully!");
        setNewValue("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetValue = async () => {
    try {
      if (state.contract) {
        const currentValue = await state.contract.getValue();
        console.log("Current value:", currentValue.toString());
        setValue(currentValue.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Smart Contract Management</h1>
      <h3>Connected Account: {account}</h3>

      <div>
        <h4>Set Value:</h4>
        <input
          type="number"
          placeholder="Enter a new value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={handleSetValue}>Set Value</button>
      </div>

      <div>
        <h4>Get Value:</h4>
        <button onClick={handleGetValue}>Get Value</button>
        <p>Current Value: {value}</p>
      </div>
    </div>
  );
}

export default App;
