//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ErrorHandling {
    uint public x;
    
    function setX(uint _x) public {
        require(_x < 1000, "Input must be smaller than thousand");

        assert(_x != 11);

        x = _x;
    }
    
    function setXWithRevert(uint _x) public {
        require(_x < 1000, "Input must be smaller than thousand");
        
        if (_x == 200) {
            revert("Input cannot be 200");
        }
        x = _x;
    }
}
