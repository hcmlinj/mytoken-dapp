'use strict'

const ipfsAPI = require('ipfs-api')

const config = require('../config.json')

module.exports = ipfsAPI(config.ipfs)