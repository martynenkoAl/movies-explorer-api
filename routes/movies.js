const router = require('express').Router();
const {
  getMovies,
  deleteMovie,
  createMovie,
} = require('../controllers/movies');
const {
  deleteMovieValidation,
  createMovieValidation,
} = require('../middlewares/validator');

router.get('/', getMovies);

router.delete('/:movieId', deleteMovieValidation, deleteMovie);

router.post('/', createMovieValidation, createMovie);

module.exports = router;
