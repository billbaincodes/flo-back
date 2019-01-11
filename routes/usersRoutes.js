const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/', usersController.getAll)
router.post('/', usersController.newPost)
router.delete('/:id', usersController.deletePost)

module.exports = router