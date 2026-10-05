import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://pedradaflix.herokuapp.com'
    : 'http://localhost:8080';

export const categories = axios.create({
  baseURL: URL + '/categorias',
});

export const videos = axios.create({
  baseURL: URL + '/videos',
});
