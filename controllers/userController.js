const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                res.send(user)
            })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body)
            .then((updatedUser) => {
                updatedUser.save()
                res.send(updatedUser)
            })
    }
}

module.exports = userController