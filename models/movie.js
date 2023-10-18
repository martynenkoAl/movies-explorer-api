const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
    },
    director: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
    },
    duration: {
      type: Number,
      required: [true, 'Поле не может быть пустым'],
    },
    year: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
    },
    description: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
    },
    image: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
      validate: {
        validator(v) {
          return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
            v
          );
        },
        message: 'Неверный формат URL',
      },
    },
    trailerLink: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
      validate: {
        validator(v) {
          return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
            v
          );
        },
        message: 'Неверный формат URL',
      },
    },
    thumbnail: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
      validate: {
        validator(v) {
          return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
            v
          );
        },
        message: 'Неверный формат URL',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Поле не может быть пустым'],
    },
    movieId: {
      type: Number,
      required: [true, 'Поле не может быть пустым'],
    },
    nameRU: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
    },
    nameEN: {
      type: String,
      required: [true, 'Поле не может быть пустым'],
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('movie', movieSchema);
