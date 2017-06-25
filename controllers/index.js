'use strict'

const fs = require('fs')

module.exports = async ctx => {
    ctx.body = fs.readFileSync('index.html').toString()
}