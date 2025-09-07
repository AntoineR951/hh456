const express = require('express');
const router = express.Router();
const tmdb = require('../services/tmdb');

router.get('/:id', async (req, res, next) => {
  try {
    const actor = await tmdb.getPerson(req.params.id);
    res.render('actor', { actor });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
