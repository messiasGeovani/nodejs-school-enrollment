/**
 * Import modules
 */
const mongoose = require('mongoose')

/**
 * School database schema
 */
const RegisterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    courses: [String]
})

module.exports = mongoose.model('register', RegisterSchema)