const router = require('express').Router();

const { updateUserData, getCurrentUser } = require('../controllers/users');
const { updateUserDataValidation } = require('../middlewares/validator');

router.get('/me', getCurrentUser);
router.patch('/me', updateUserDataValidation, updateUserData);

module.exports = router;
