pragma solidity ^0.4.11;

import "./MyToken.sol";

contract TokenFactory {
    struct Token {
        address owner;
        address token;
        string name;
        string symbol;
        uint decimals;
        uint totalSupply;
        uint timestamp;
    }

    event TokenCreated (
        address indexed owner,
        address indexed token,
        string name,
        string symbol,
        uint decimals,
        uint totalSupply
    );

    Token[] public tokens;

    function getTokenCount() constant returns (uint) {
        return tokens.length;
    }

    function createMyToken(string name, string symbol, uint decimals, uint INITIALSUPPLY) {
        MyToken token = new MyToken(msg.sender, name, symbol, decimals, INITIALSUPPLY);

        tokens.push(Token({
            owner: msg.sender,
            token: token,
            name: name,
            symbol: symbol,
            decimals: decimals,
            totalSupply: INITIALSUPPLY,
            timestamp: now
        }));

        TokenCreated(msg.sender, token, name, symbol, decimals, INITIALSUPPLY);
    }
}