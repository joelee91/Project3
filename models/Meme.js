const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Meme = new Schema({
    name: String,
    img: String
})

module.exports = mongoose.model('Meme', Meme)