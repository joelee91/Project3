const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

router.get('/api/users', userController.index)
router.post('/api/users', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/posts', postController.index)
router.post('/api/users/:userId/posts', postController.create)
router.get('/api/users/:userId/posts/:postId', postController.show)
router.patch('/api/users/:userId/posts/:postId', postController.update)
router.delete('/api/users/:userId/posts/:postId', postController.delete)

module.exports = router