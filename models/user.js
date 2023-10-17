const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Необходимо ввести имя пользователя'],
      minlength: [2, 'Имя не может быть короче двух символов'],
      maxlength: [30, 'Имя не может быть длиннее 30-ти символов'],
    },
    email: {
      type: String,
      required: [true, 'Необходимо ввести email'],
      unique: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: 'Неверный формат email',
      },
    },
    password: {
      type: String,
      required: [true, 'Необходимо ввести пароль'],
      select: false,
    },
  },
  { versionKey: false }
);

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password
) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Неправильные почта или пароль');
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          throw new UnauthorizedError('Неправильные почта или пароль');
        }

        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
