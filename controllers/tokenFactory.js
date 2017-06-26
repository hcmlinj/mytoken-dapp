'use strict'

const ipfs = require('../models/ipfs')
const web3 = require('../models/web3')
const config = require('../config.json')

exports.create = async ctx => {
    const body = ctx.req.body
    const tokenFactory = web3.eth.contract(config.abi.TokenFactory).at(config.contract.TokenFactory)

    let hash = ''

    try {
        hash = (await ipfs.files.add(ctx.req.file.buffer))[0].hash
    } catch (e) {
        hash = 'Qmf1wsKeSbjQf8aajZxdD47h15Mb8hpZaFxQPcchdfFUmx'
    }

    try {
        ctx.body = tokenFactory.createMyToken(
            body.name,
            body.symbol,
            body.decimals,
            body.totalSupply,
            `https://ipfs.infura.io/ipfs/${hash}`, {
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