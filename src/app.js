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
router.get('/registration', async (ctx, next) => {
    ctx.body = {
        message: "registration route"
    }
})

// creating routes
app.use(router.routes())
// setting permission of all http methods
app.use(router.allowedMethods())
// creating the server
const server = app.listen(3000)
module.exports = server