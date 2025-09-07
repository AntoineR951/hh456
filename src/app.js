const express = require('express');
const path = require('path');

const filmsRoute = require('./routes/films');
const actorsRoute = require('./routes/actors');
const newsRoute = require('./routes/news');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/films', filmsRoute);
app.use('/actors', actorsRoute);
app.use('/news', newsRoute);

app.get('/', (req, res) => {
  res.redirect('/news');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
