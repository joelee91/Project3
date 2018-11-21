const User = require('../models/User')
const Meme = require('../models/Meme')

const memeController = {
    index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('memes')
            .then((user) => {
                user.memes = user.memes.reverse 
                res.send(user.memes)
            })
    },
    show: (req, res) => {
        let memeId = req.params.memeId
        Meme.findById(memeId)
            .then((meme) => {
                res.send(meme)
            })
    },
    update: (req, res) => {
        let memeId = req.params.memeId
        Meme.findByIdAndUpdate(memeId, req.body, { new: true })
            .then((updatedMeme) => {
                updatedMeme.save()
                res.send(updatedMeme)
            })
    },
    delete: (req, res) => {
        let memeId = req.params.memeId
        Meme.findByIdAndDelete(memeId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        let userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                Meme.create(req.body)
                    .then((newMeme) => {
                        user.memes.push(newMeme)
                        user.save()
                        res.send(newMeme)
                    })
            })
    }

}

module.exports = memeController