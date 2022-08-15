const { Router } = require('express');
const router = new Router();

const {
    getSignup,
    createUser
} = require('../controllers/signup.controller');

router.get('/', getSignup);
router.get('/:verifi_code');
router.post('/', createUser);

module.exports = router;