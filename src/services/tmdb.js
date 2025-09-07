const axios = require('axios');

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

async function getMovie(id) {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY, language: 'fr-FR' }
  });
  return data;
}

async function getPerson(id) {
  const { data } = await axios.get(`${BASE_URL}/person/${id}`, {
    params: { api_key: API_KEY, language: 'fr-FR' }
  });
  return data;
}

module.exports = { getMovie, getPerson };
