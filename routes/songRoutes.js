const express = require('express')
const router = express.Router()
const songController = require('../controllers/songController')

router.get('/', songController.getAll)
router.post('/', songController.newPost)
router.delete('/:id', songController.deletePost)

module.exports = router