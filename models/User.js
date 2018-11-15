const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    email: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    age: Number,
    location: String,
    posts: Array,
    friends: Array,
    photos: Array,
    events: Array,
    games: Array
})

module.exports = mongoose.model('User', User)