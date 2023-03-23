pragma solidity >=0.8.0 <0.9.0 ;

contract ERC20 {
    string public name;
    string public symbol;
    mapping(address => uint256) public balanceOf;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        balanceOf[0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65] = 1000;
    }

}