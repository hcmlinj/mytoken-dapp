'use strict'

const web3 = require('../models/web3')
const config = require('../config.json')

exports.info = async ctx => {
    try {
        const myToken = web3.eth.contract(config.abi.MyToken).at(ctx.params.token)

        ctx.body = {
            name: myToken.name(),
            symbol: myToken.symbol(),
            totalSupply: myToken.totalSupply()
        }
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}

exports.balance = async ctx => {
    try {
        const body = ctx.request.body
        const myToken = web3.eth.contract(config.abi.MyToken).at(body.token)

        ctx.body = myToken.balanceOf(body.owner)
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}

exports.transfer = async ctx => {
    try {
        const body = ctx.request.body
        const myToken = web3.eth.contract(config.abi.MyToken).at(body.token)

        ctx.body = myToken.transfer(body.to, body.amount, {
            from: body.owner
        })
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}

exports.approve = async ctx => {
    try {
        const body = ctx.request.body
        const myToken = web3.eth.contract(config.abi.MyToken).at(body.token)

        ctx.body = myToken.approve(body.to, body.amount, {
            from: body.owner
        })
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}

exports.allowance = async ctx => {
    try {
        const body = ctx.request.body
        const myToken = web3.eth.contract(config.abi.MyToken).at(body.token)

        ctx.body = myToken.allowance(body.owner, body.to)
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}

exports.transferFrom = async ctx => {
    try {
        const body = ctx.request.body
        const myToken = web3.eth.contract(config.abi.MyToken).at(body.token)

        ctx.body = myToken.transferFrom(body.owner, body.to, body.amount, {
            from: body.to
        })
    } catch (e) {
        console.log(e)
        ctx.throw(400, e.message)
    }
}