// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KnightsNFT is ERC721URIStorage, Ownable {
    constructor() ERC721("Knights", "KNT") {}

    function promptDescription() public pure returns (string memory) {
        return "Embark on a creative odyssey to design a futuristic knight. Blend past and future elements, create a captivating backstory, and unleash your imagination. Utilize cutting-edge digital tools and experiment with interactive elements. Your journey will redefine valor in the digital realm.";
    }

    function mint(address to, uint256 tokenId, string memory tokenURI) public onlyOwner {
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}
