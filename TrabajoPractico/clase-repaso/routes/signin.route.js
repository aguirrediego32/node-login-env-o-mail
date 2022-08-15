const {Router} = require('express');
const router = new Router();

const {
    getSignin, authenticate
} = require('../controllers/signin.controller');

router.get('/', getSignin);
router.post('/', authenticate);

module.exports = router;