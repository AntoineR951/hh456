const express = require('express');
const router = express.Router();
const news = require('../data/news.json');

router.get('/', (req, res) => {
  res.render('newsList', { news });
});

router.get('/:id', (req, res) => {
  const item = news.find(n => n.id === Number(req.params.id));
  if (!item) return res.status(404).send('News not found');
  res.render('news', { item });
});

module.exports = router;
