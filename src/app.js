/**
 * Importing modules
 */
const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')

// register object methods
const RegisterController = require('./controllers/registerController')


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
 * Database connect
 */
const databaseConnect = require('./config/database')()

/**
 * Routes
 */
router.post('/registration', RegisterController.create)
router.get('/registrations', RegisterController.index)
router.get('/registration', RegisterController.show)
router.put('/registration', RegisterController.edit)
router.delete('/registration', RegisterController.remove)

// creating routes
app.use(router.routes())
// setting permission of all http methods
app.use(router.allowedMethods())
// creating the server
const server = app.listen(3000)
module.exports = server