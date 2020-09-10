import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://app-gestao.herokuapp.com/'
    : 'http://localhost:3333';

export const auth = axios.create({
  baseURL: URL + '/auth',
});
