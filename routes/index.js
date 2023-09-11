const router = require('express').Router();
const { addUser, loginUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const {
  signupValidation,
  signinValidation,
} = require('../middlewares/validator');

router.post('/signup', signupValidation, addUser);

router.post('/signin', signinValidation, loginUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('*', (req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = { router };
