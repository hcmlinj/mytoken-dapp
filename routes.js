'use strict'

const index = require('./controllers/index')
const eth = require('./controllers/eth')
const tokenFactory = require('./controllers/tokenFactory')
const myToken = require('./controllers/myToken')

module.exports = router => {
    router.get('/config', async ctx => {
        ctx.body = require('./config')
    })

    router.get('/', index)

    router.get('/eth/info', eth.info)

    router.post('/token-factory/create', tokenFactory.create)
    router.get('/token-factory/list', tokenFactory.list)

    router.get('/my-token/info/:token', myToken.info)
    router.post('/my-token/balance', myToken.balance)
    router.post('/my-token/transfer', myToken.transfer)
    router.post('/my-token/approve', myToken.approve)
    router.post('/my-token/allowance', myToken.allowance)
    router.post('/my-token/transfer-from', myToken.transferFrom)
}