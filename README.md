# myToken ÐApp
myToken demo

## Smart Contracts
* [TokenFactory.sol](https://github.com/hcmlinj/mytoken-dapp/blob/master/contracts/TokenFactory.sol)
* [MyToken.sol](https://github.com/hcmlinj/mytoken-dapp/blob/master/contracts/MyToken.sol)

## Config
### Default [config.json](https://github.com/hcmlinj/mytoken-dapp/blob/master/config.json), you should modify to yours.
```js
    "contract": {
        "TokenFactory": "0xecf17cf39a28a5cbe23325e8f3546362457425e8"
    },
    "ethereum": {
        "host": "http://127.0.0.1:8545"
    }
```

## Requirement
```bash
node -v
v7.0.0
```

## testrpc (optional)
```bash
npm run testrpc
```

## Deploy (Truffle)
```bash
npm run migrate
```

## Console (Truffle)
```bash
npm run console
```

## Install
```bash
npm install
```

## Build
```bash
npm run buildp
```

## Start
```bash
npm run start
```

## Open
[http://127.0.0.1:3000](http://127.0.0.1:3000)