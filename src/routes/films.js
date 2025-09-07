const express = require('express');
const router = express.Router();
const tmdb = require('../services/tmdb');

router.get('/:id', async (req, res, next) => {
  try {
    const film = await tmdb.getMovie(req.params.id);
    res.render('film', { film });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
