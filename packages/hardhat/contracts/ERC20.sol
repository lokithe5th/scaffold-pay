pragma solidity >=0.8.0 <0.9.0 ;

contract ERC20 {
    string public name;
    string public symbol;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }
}