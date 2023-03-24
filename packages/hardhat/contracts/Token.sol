pragma solidity >=0.8.0 <0.9.0 ;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(0x8BAcE0a7F64a5A2fAA3DfD757ecd3E3E25AC3473, 100 * 10**18);
    }

}