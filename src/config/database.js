/**
 * Importing modules
 */
const mongoose = require('mongoose')

/**
 * Configuring the connection
 */
const Connect = () => {
    const url = 'mongodb+srv://developer:developer@cluster0-fexky.mongodb.net/school?retryWrites=true&w=majority';
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = Connect