/**
 * Import modules
 */
const mongoose = require('mongoose')
const Register = require('../models/School')

/**
 * Creating methods
 */
 module.exports = {
    //  insert data
     async create(ctx) {
        ctx.body = {
            message: "post registration route"
        }
     },
    //  list all data
     async index(ctx) {
        ctx.body = {
            message: "get registrations route"
        }
     },
    //  get a single data
     async show(ctx) {
        ctx.body = {
            message: "get registration route"
        }
     },
    //  update data
     async edit(ctx) {
        ctx.body = {
            message: "put registrations route"
        }
     },
    //  delete data
     async remove(ctx) {
        ctx.body = {
            message: "delete registrations route"
        }
     }
 }