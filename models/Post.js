const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Post = new Schema({
    text: String
})

module.exports = mongoose.model('Post', Post)