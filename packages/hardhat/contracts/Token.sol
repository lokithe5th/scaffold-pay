pragma solidity >=0.8.0 <0.9.0 ;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(0x4b5E55D7aB0a3d438b1047fC86D88b1335093c10, 100 * 10**18);
    }

}