'use strict'

const web3 = require('../models/web3')
const config = require('../config.json')

exports.create = async ctx => {
    const body = ctx.request.body
    const tokenFactory = web3.eth.contract(config.abi.TokenFactory).at(config.contract.TokenFactory)

    try {
        ctx.body = tokenFactory.createMyToken(
            body.name,
            body.symbol,
            body.decimals,
            body.totalSupply, {
                from: body.owner,
                gas: 2000000
            }
        )
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}

exports.list = async ctx => {
    const tokenFactory = web3.eth.contract(config.abi.TokenFactory).at(config.contract.TokenFactory)

    try {
        const counts = tokenFactory.getTokenCount()

        let tokens = []

        for (let i = 0; i < counts; i++) {
            tokens.push(tokenFactory.tokens(i))
        }

        ctx.body = tokens
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}