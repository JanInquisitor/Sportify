const express = require('express');
const commentController = require('../controllers/commentController')

const router = express.Router()

router
    .route('/')
    .get(commentController.getAllComments)
    .post(commentController.createComment)

router
    .route('/:id')
    .get(commentController.getComment)
    .put(commentController.updateComment)
    .delete(commentController.updateComment)

module.exports = router;