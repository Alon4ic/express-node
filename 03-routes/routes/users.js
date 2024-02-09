const express = require('express')

const {getUsersHandler,
    getSingleUserHandler,
    postUserHandler} = require('../controllers/users')

const router = express.Router()

router.get('/', getUsersHandler);
router.post('/', postUserHandler);
router.get('/:userId', getSingleUserHandler);

module.exports = router;