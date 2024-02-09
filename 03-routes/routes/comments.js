const express = require('express');

const {
    getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHendler,
} = require('../controllers/comments');

const router = express.Router();

router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getSingleCommentHandler);
router.delete('/:commentId', deleteSingleCommentHendler);

module.exports = router;
