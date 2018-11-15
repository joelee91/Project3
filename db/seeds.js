const User = require('../models/User')
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

User.remove({})
    .then(() => joe.save())
    .then(() => console.log('saved'))
    .then(() => mongoose.connection.close())