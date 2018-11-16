const User = require('../models/User')
const Post = require('../models/Post')

const postController = {
    index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('posts')
            .then((user) => {
                res.send(user.posts)
            })
    },
    show: (req, res) => {
        let postId = req.params.postId
        Post.findById(postId)
            .then((post) => {
                res.send(post)
            })
    },
    update: (req, res) => {
        let postId = req.params.postId
        Post.findByIdAndUpdate(postId, req.body, { new: true })
            .then((updatedPost) => {
                updatedPost.save()
                res.send(updatedPost)
            })
    },
    delete: (req, res) => {
        let postId = req.params.postId
        Post.findByIdAndDelete(postId)
            .then(() => {
                res.send(200)
            })
    }

}

module.exports = postController