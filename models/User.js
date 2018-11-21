const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    age: Number,
    ethnicity: String,
    hobbies: String,
    interests: String,
    memes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meme'
        }
    ]
})

module.exports = mongoose.model('User', User)