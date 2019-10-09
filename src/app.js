/**
 * Importing modules
 */
const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')


/**
 * Starting the app and routes
 */
const app = new Koa()
const router = new Router()

/**
 * App config
 */
app.use(logger())
app.use(json())
app.use(bodyParser())

/**
 * Routes
 */
router.post('/registration', async ctx => {
    ctx.body = {
        message: "post registration route"
    }
})
router.get('/registrations', async ctx => {
    ctx.body = {
        message: "get registrations route"
    }
})
router.get('/registration', async ctx => {
    ctx.body = {
        message: "get registration route"
    }
})
router.put('/registration', async ctx => {
    ctx.body = {
        message: "put registration route"
    }
})
router.delete('/registration', async ctx => {
    ctx.body = {
        message: "delete registration route"
    }
})

// creating routes
app.use(router.routes())
// setting permission of all http methods
app.use(router.allowedMethods())
// creating the server
const server = app.listen(3000)
module.exports = server