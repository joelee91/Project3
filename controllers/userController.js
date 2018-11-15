const User = require('../models/User')

const userController = {
    Index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    }
}

module.exports = userController