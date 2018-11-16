const User = require('../models/User')
const Post = require('../models/Post')
const mongoose = require('./connections')

const joePost1 = new Post({
    text: "my first post"
})

const joePost2 = new Post({
    text: "my second post"
})

const joe = new User({
    email: 'joesampras@gmail.com',
    username: 'joelee',
    password: 'joelee',
    firstName: 'joe',
    lastName: 'lee',
    age: 26,
    location: 'joelee',
    posts: [joePost1, joePost2]
})

User.remove({})
    .then(() => Post.remove({}))
    .then(() => Post.insertMany([joePost1, joePost2]))
    .then(() => joe.save())
    .then(() => console.log('saved'))
    .then(() => mongoose.connection.close())