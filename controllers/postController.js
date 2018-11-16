const User = require('../models/User')
const Post = require('../models/Post')

const postController = {
    index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('posts')
            .then((user) => {
                res.send(user.posts)
            })
    }
}

module.exports = postController