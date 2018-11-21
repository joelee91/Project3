const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const memeController = require('../controllers/memeController')

router.get('/api/users', userController.index)
router.post('/api/users', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/memes', memeController.index)
router.post('/api/users/:userId/memes', memeController.create)
router.get('/api/users/:userId/memes/:memeId', memeController.show)
router.patch('/api/users/:userId/memes/:memeId', memeController.update)
router.delete('/api/users/:userId/memes/:memeId', memeController.delete)

module.exports = router