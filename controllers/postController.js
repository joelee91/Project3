const User = require('../models/User')
const Post = require('../models/Post')

const postController = {
    index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('posts')
            .then((user) => {
                user.posts = user.posts.reverse
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
    },
    create: (req, res) => {
        let userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                Post.create(req.body)
                    .then((newPost) => {
                        user.posts.push(newPost)
                        user.save()
                        res.send(newPost)
                    })
            })
    }

}

module.exports = postController