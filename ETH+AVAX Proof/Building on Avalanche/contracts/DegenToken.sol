// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {
    mapping(uint256 => uint256) public itemPrices;

    constructor() ERC20("Degen", "DGN") {
        itemPrices[1] = 100;  //NFT
        itemPrices[2] = 500;  //Avatar
        itemPrices[3] = 50;   //T-shirt
        itemPrices[4] = 1000; //Artifact
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function redeem(uint256 itemId) public {
        require((itemId > 0) && (itemId < 5), "Invalid item ID");
        require(balanceOf(_msgSender()) >= itemPrices[itemId], "Insufficient balance");

        _burn(_msgSender(), itemPrices[itemId]);

    }

    function balanceOf(address account) public view override returns (uint256) {
        return super.balanceOf(account);
    }

    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }

}
