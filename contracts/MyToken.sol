pragma solidity ^0.4.11;

import "./zeppelin/token/StandardToken.sol";

contract MyToken is StandardToken {
    string public name;
    string public symbol;
    uint public decimals;
    uint public INITIAL_SUPPLY;
  
    function MyToken(address owner, string _name, string _symbol, uint _decimals, uint _INITIAL_SUPPLY) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        INITIAL_SUPPLY = _INITIAL_SUPPLY;

        totalSupply = INITIAL_SUPPLY;
        balances[owner] = INITIAL_SUPPLY;
    }
}