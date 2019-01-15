const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlistController')

router.get('/', playlistController.getAll),
router.get('/:id', playlistController.getOne),
router.get('/user/:id', playlistController.getByUser),
router.post('/', playlistController.addSongToList)

module.exports = router