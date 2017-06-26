'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const serve = require('koa-static')
const fs = require('fs')
const multer = require('koa-multer')

const routes = require('./routes')

const app = new Koa()
const router = new Router()

routes(router, multer({
    storage: multer.memoryStorage()
}))

const port = process.env.PORT || 3000

app
    .use(bodyparser())
    .use(router.routes())
    .use(serve('dist'))
    .listen(port, () =>
        console.log(`Server started: http://127.0.0.1:${port}`)
    )