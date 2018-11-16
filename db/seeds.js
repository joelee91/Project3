const User = require('../models/User')
const Post = require('../models/Post')
const mongoose = require('./connections')

const joe = new User({
    email: 'joesampras@gmail.com',
    username: 'joelee',
    password: 'joelee',
    firstName: 'joe',
    lastName: 'lee',
    age: 26,
    location: 'joelee'
})

const joePost1 = new Post({
    text: "my first post"
})

User.remove({})
    .then(() => Post.remove({}))
    .then(() => Post.insertMany(joePost1))
    .then(() => joe.save())
    .then(() => console.log('saved'))
    .then(() => mongoose.connection.close())