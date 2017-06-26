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
        string image;
        uint timestamp;
    }

    event TokenCreated (
        address indexed owner,
        address indexed token,
        string name,
        string symbol,
        uint decimals,
        string image,
        uint totalSupply
    );

    Token[] public tokens;

    function getTokenCount() constant returns (uint) {
        return tokens.length;
    }

    function createMyToken(string name, string symbol, uint decimals, uint INITIALSUPPLY, string image) {
        MyToken token = new MyToken(msg.sender, name, symbol, decimals, INITIALSUPPLY, image);

        tokens.push(Token({
            owner: msg.sender,
            token: token,
            name: name,
            symbol: symbol,
            decimals: decimals,
            totalSupply: INITIALSUPPLY,
            image: image,
            timestamp: now
        }));

        TokenCreated(msg.sender, token, name, symbol, decimals, image, INITIALSUPPLY);
    }
}